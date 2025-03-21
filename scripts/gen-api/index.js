import { exec } from "child_process";
import { parse } from "yaml";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  camelCase,
  isObject,
  partition,
  toLower,
  upperCase,
  upperFirst,
} from "lodash-es";
import API_NAME from "./api-name.json" with { type: "json" };
import EXCLUDED from "./excluded.json" with { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SWAGGER_FILE = ``;

(async () => {
  const content = await fetch(SWAGGER_FILE).then(async (res) =>
    parse(await res.text()),
  );

  console.info("🛸  Generating types...");
  const schemas = content.components.schemas;
  genTypes(schemas);

  console.info("🪝   Generating hooks...");
  const endpoints = content.paths;
  genHooks(endpoints);

  console.info("💅  Formatting...");
  exec(`eslint --fix ${path.join(__dirname, "../../src/__generated__/api")}`);
  exec(
    `prettier --write ${path.join(__dirname, "../../src/__generated__/api")}`,
  );
})();

// INFO: Generate TypeScript types for the schemas
const OUTPUT_TYPES_PATH = path.join(
  __dirname,
  "../../src/__generated__/api/types/swagger.ts",
);
function genTypes(schemas) {
  const types = Object.entries(schemas).map(([name, info]) => {
    const formatName = pascalCase(name);

    if (info.enum) {
      return genEnumType(formatName, info);
    }

    if (info.type === "object") {
      return genObjectType(formatName, info);
    }

    return `// ${name}`;
  });

  const content = types.join("\n");
  write(OUTPUT_TYPES_PATH, content);
}

function genEnumType(name, info) {
  return `export enum ${name} { ${info.enum.map((v) => `${pascalCase(v)}= "${toLower(v)}"`).join(",")} }`;
}

function genObjectType(name, info) {
  return `export type ${name} = ${genPropertySchema(info)}`;
}

function genPropertySchema(info = {}, callback) {
  callback?.(info);

  if (info.type === "string") {
    switch (info.format) {
      case "binary":
        return "File";

      default:
        return "string";
    }
  }
  if (info.type === "integer") return "number";
  if (info.type === "boolean") return "boolean";
  if (info.type === "array")
    return `Array<${genPropertySchema(info.items, callback)}>`;
  if (info.$ref) return pascalCase(info.$ref.split("/").pop());
  if (info.allOf)
    return info.allOf.map((v) => genPropertySchema(v, callback)).join(" & ");

  if (info.properties) {
    return `{ ${Object.entries(info.properties)
      .map(([propName, propInfo]) => {
        const optional = propInfo.nullable ? "?" : "";
        return `${camelCase(propName)}${optional}: ${genPropertySchema(propInfo, callback)}`;
      })
      .join("; ")} }`;
  }

  if (info.additionalProperties) {
    const additionalType = isObject(info.additionalProperties)
      ? genPropertySchema(info.additionalProperties, callback)
      : `unknown`;
    return `{ [key: string]: ${additionalType} }`;
  }

  return `'UNKNOWN_TYPE'`;
}

// INFO: Generate API hooks
const OUTPUT_HOOK_DIR = path.join(
  __dirname,
  "../../src/__generated__/api/hooks",
);

function genHooks(endpoints) {
  Object.entries(endpoints).forEach(([endpoint, methods]) =>
    Object.entries(methods).forEach(([method, info]) => {
      const upperCaseMethod = upperCase(method);
      const rawName = API_NAME[`${upperCaseMethod} ${endpoint}`];

      if (!rawName) {
        console.warn(`❌  Missing API_NAME for ${upperCaseMethod} ${endpoint}`);
        return;
      }

      const isExcluded = EXCLUDED.includes(`${upperCaseMethod} ${endpoint}`);
      if (isExcluded) return;

      if (
        upperCaseMethod === "GET" ||
        endpoint.endsWith("/list") ||
        endpoint.includes("/list/")
      ) {
        genUseQueryHook(upperCaseMethod, endpoint, info);
      } else {
        genUseMutationHook(upperCaseMethod, endpoint, info);
      }
    }),
  );
}

function genUseQueryHook(method, endpoint, info) {
  const rawName = API_NAME[`${method} ${endpoint}`];
  const pascalName = pascalCase(rawName);

  const { importResponseType, responseType } = genResponseType(info);
  const { importInputTypes, params, queries, body } = genInputType(info);

  const endpointWithParams = endpoint.replace(
    /{([^}]*)}/g,
    (_, p) => `\${params.${p}}`,
  );

  const hasInput = !!params || !!queries || !!body;
  const hadImportTypes = importInputTypes || importResponseType;
  const inputArgs = `{ ${params ? "params," : ""} ${queries ? "queries," : ""} ${body ? "body," : ""} }`;

  const template = `
    import { useQuery } from "@tanstack/react-query";
    import { authClient as client } from "~/auth/services/client.service";
    import { QueryProps } from "~/__generated__/api/types/base";
    ${hasInput ? `import { DeepPartial } from "~shared/types/base.type";` : ""}
    ${hadImportTypes ? `import { ${[...importInputTypes, ...importResponseType].join(", ")} } from "~/__generated__/api/types/swagger"` : ""}

    ${hasInput ? `export type ${pascalName}Input = { ${params ? `${params},` : ""} ${queries ? `${queries},` : ""} ${body ? `${body},` : ""} } ` : ""}
    export type ${pascalName}Response = ${responseType};
    export type Use${pascalName}Props = QueryProps<${pascalName}Response${hasInput ? `, ${pascalName}Input` : ""}>;

    export const gen${pascalName}Key = (${hasInput ? `${inputArgs}: DeepPartial<${pascalName}Input> = {}` : ""}) => ["${method}", "${endpoint}", ${hasInput ? `...Object.values(${inputArgs}).filter(Boolean)` : ""}];

    export async function ${camelCase(pascalName)}(${hasInput ? `${inputArgs}: ${pascalName}Input` : ""}): Promise<${pascalName}Response> {
      const { data } = await client<${pascalName}Response>({
        method: "${method}",
        url: \`${endpointWithParams}\`,
        ${body ? "data: body," : ""}
        ${queries ? "params: queries," : ""}
      });

      return data
    }

    export function use${pascalName}(${hasInput ? `{ ${inputArgs.slice(1, -1)} ...options }` : "options"}: Use${pascalName}Props${hasInput ? "" : " = {}"}) {
      return useQuery({
        queryKey: gen${pascalName}Key(${hasInput ? `${inputArgs}` : ""}),
        queryFn: () => ${camelCase(pascalName)}(${hasInput ? `${inputArgs}` : ""}),
        ...options,
      });
    }
  `;

  write(path.join(OUTPUT_HOOK_DIR, `use${pascalName}.ts`), template);
}

function genUseMutationHook(method, endpoint, info) {
  const rawName = API_NAME[`${method} ${endpoint}`];
  const pascalName = pascalCase(rawName);

  const { importResponseType, responseType } = genResponseType(info);
  const { importInputTypes, params, queries, body, bodyType } =
    genInputType(info);

  const endpointWithParams = endpoint.replace(
    /{([^}]*)}/g,
    (_, p) => `\${params.${p}}`,
  );

  const hasInput = !!params || !!queries || !!body;
  const hadImportTypes = importInputTypes || importResponseType;
  const inputArgs = `{ ${params ? "params," : ""} ${queries ? "queries," : ""} ${body ? "body," : ""} }`;

  const template = `
    import { useMutation } from "@tanstack/react-query";
    import { authClient as client } from "~/auth/services/client.service";
    import type { MutationProps } from "~/__generated__/api/types/base";
    ${hadImportTypes ? `import { ${[...importInputTypes, ...importResponseType].join(", ")} } from "~/__generated__/api/types/swagger"` : ""}

    ${hasInput ? `export type ${pascalName}Input = { ${params ? `${params},` : ""} ${queries ? `${queries},` : ""} ${body ? `${body},` : ""} } ` : ""}
    export type ${pascalName}Response = ${responseType};
    export type Use${pascalName}Props = MutationProps<${pascalName}Response${hasInput ? `, ${pascalName}Input` : ""}>;

    export const ${rawName}_KEY = ["${method}", "${endpoint}"];

    export async function mutationFn(${hasInput ? `${inputArgs}: ${pascalName}Input` : ""}): Promise<${pascalName}Response> {
      ${
        body && bodyType === "multipart/form-data"
          ? `const formData = new FormData();
              Object.entries(body).map(([key, value]) => {
              if (Array.isArray(value)) {
                return value.map((value) => formData.append(key, value));
              }
              return formData.append(key, value);
            });
          `
          : ""
      }

      const { data } = await client<${pascalName}Response>({
        method: "${method}",
        url: \`${endpointWithParams}\`,
        ${body && bodyType === "application/json" ? "data: body," : ""}
        ${body && bodyType === "multipart/form-data" ? "data: formData," : ""}
        ${queries ? "params: queries," : ""}
      });

      return data
    }

    export function use${pascalName}(options: Use${pascalName}Props = {}) {
      const mutation = useMutation({
        mutationKey: ${rawName}_KEY,
        mutationFn,
        ...options,
      });

      return mutation;
    }
  `;

  write(path.join(OUTPUT_HOOK_DIR, `use${pascalName}.ts`), template);
}

function genResponseType(info) {
  const importResponseType = [];
  const responseSchema =
    info.responses[200].content?.["application/json"]?.schema;
  const responseType = genPropertySchema(
    responseSchema,
    (info) =>
      info?.$ref &&
      importResponseType.push(pascalCase(info.$ref.split("/").pop())),
  );

  return { responseType, importResponseType };
}

function genInputType(info) {
  const { parameters = [], requestBody } = info;
  const importInputTypes = [];

  const [params, queries] = partition(parameters, (p) => p.in === "path").map(
    (items) =>
      items
        .map((p) => {
          const type = genPropertySchema(p.schema, (info) => {
            info.$ref &&
              importInputTypes.push(pascalCase(info.$ref.split("/").pop()));
          });
          return `${p.name}${""}: ${type}`;
        })
        .join(", "),
  );

  const bodyType = requestBody?.content["application/json"]
    ? "application/json"
    : "multipart/form-data";
  const bodySchema = requestBody?.content[bodyType]?.schema;
  const body = bodySchema
    ? `body: ${genPropertySchema(bodySchema, (info) => {
        info.$ref &&
          importInputTypes.push(pascalCase(info.$ref.split("/").pop()));
      })}`
    : undefined;

  return {
    importInputTypes,
    params: params.length ? `params: { ${params} }` : undefined,
    queries: queries.length ? `queries: { ${queries} }` : undefined,
    body,
    bodyType,
  };
}

// INFO: Utils
function write(filePath, content) {
  const dirPath = path.dirname(filePath);
  !fs.existsSync(dirPath) && fs.mkdirSync(dirPath, { recursive: true });
  fs.writeFileSync(filePath, content);
  fs.writeFileSync(filePath, content);
}

const pascalCase = (str) => upperFirst(camelCase(str));

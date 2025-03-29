import { TANSTACK_QUERY_HOOKS_DIR } from "~scripts/gen-api/configs/config";
import { genInputType } from "~scripts/gen-api/modules/tanstack-query/gen-input-type";
import { genResponseType } from "~scripts/gen-api/modules/tanstack-query/gen-response-type";
import { write } from "~scripts/gen-api/utils/write-file";
import { camelCase, uniq, upperFirst } from "lodash-es";
import { OpenAPIV3 } from "openapi-types";
import path from "path";

export function genMutationHook(opts: {
  method: OpenAPIV3.HttpMethods;
  endpoint: string;
  schema: OpenAPIV3.OperationObject;
  name: string;
}) {
  const { method, endpoint, schema, name } = opts;

  const pascalName = upperFirst(camelCase(name));
  const hookName = `use${pascalName}`;
  const hookPropsName = `Use${pascalName}Props`;
  const inputTypeName = `${pascalName}Input`;
  const responseTypeName = `${pascalName}Response`;
  const genKeyFnName = `gen${pascalName}Key`;
  const functionName = camelCase(pascalName);
  const fileName = `${hookName}.ts`;

  const { imports: inputImports, queries, params, body } = genInputType(schema);
  const { imports: responseImports, response } = genResponseType(schema);

  const imports = uniq([...inputImports, ...responseImports]);
  const hasImports = !!imports.length;

  const hasInput = queries.length || params.length || body;
  const isAllParamsOptional = params.every((p) => !p?.required);
  const isAllQueriesOptional = queries.every((q) => !q?.required);
  const isBodyOptional = !body?.required;
  const destructInput = ` ${params.length ? "params," : ""} ${queries.length ? "queries," : ""} ${body ? "body," : ""}`;

  const paramsSchema = params.length
    ? `params ${isAllParamsOptional ? "?" : ""}: { ${params.map((p) => `${p?.name} ${p?.required ? "" : "?"}: ${p?.schema}`)} },`
    : "";
  const queriesSchema = queries.length
    ? `queries ${isAllQueriesOptional ? "?" : ""}: { ${queries.map((q) => `${q?.name} ${q?.required ? "" : "?"}: ${q?.schema}`)} },`
    : "";
  const bodySchema = body ? `body ${isBodyOptional ? "?" : ""}: ${body.schema},` : "";

  const content = `\
    import { useMutation } from "@tanstack/react-query";

    import { MutationProps } from "~/__generated__/types/api-base.type";
    import { authClient as client } from "~/auth/services/client.service";

    ${hasImports ? `import { ${imports.join(", ")} } from "~/__generated__/types/swagger.type";` : ""}

    ${hasInput ? `export type ${inputTypeName} = { ${paramsSchema} ${queriesSchema} ${bodySchema} }` : ""}
  
    export type ${responseTypeName} = ${response}

    export type ${hookPropsName} = MutationProps<${responseTypeName} ${hasInput ? `, ${inputTypeName}` : ""}>

    export const ${genKeyFnName} = () => ['${method}', '${endpoint}']

    export async function ${functionName}(${hasInput ? `{${destructInput}}: ${inputTypeName}` : ""}) {
      ${
        body && body.type === "multipart/form-data"
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
          url: \`${endpoint.replace(/{([^}]*)}/g, (_, p) => `\${params.${p}}`)}\`,
          ${body ? `data: ${body.type === "multipart/form-data" ? "formData" : "body"},` : ""}\
          ${queries.length ? `params: queries,` : ""}\
      });

      return data
    }

    export function ${hookName}(options: ${hookPropsName} = {}) {
      return useMutation({
        mutationKey: ${genKeyFnName}(),
        mutationFn: ${functionName},
        ...options,
      });
    }
  `;

  write(path.join(TANSTACK_QUERY_HOOKS_DIR, fileName), content);
}

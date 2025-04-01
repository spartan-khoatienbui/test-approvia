import { TANSTACK_QUERY_HOOKS_DIR } from "~scripts/gen-api/configs/config";
import { genInputType } from "~scripts/gen-api/modules/tanstack-query/gen-input-type";
import { genResponseType } from "~scripts/gen-api/modules/tanstack-query/gen-response-type";
import { write } from "~scripts/gen-api/utils/write-file";
import { camelCase, uniq, upperFirst } from "lodash-es";
import { OpenAPIV3 } from "openapi-types";
import path from "path";

export async function genQueryHook(opts: {
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
  const isAllInputOptional = isAllParamsOptional && isAllQueriesOptional && isBodyOptional;
  const destructInput = ` ${params.length ? "params," : ""} ${queries.length ? "queries," : ""} ${body ? "body," : ""}`;

  const paramsSchema = params.length
    ? `params ${isAllParamsOptional ? "?" : ""}: { ${params.map((p) => `${p?.name} ${p?.required ? "" : "?"}: ${p?.schema}`)} },`
    : "";
  const queriesSchema = queries.length
    ? `queries ${isAllQueriesOptional ? "?" : ""}: { ${queries.map((q) => `${q?.name} ${q?.required ? "" : "?"}: ${q?.schema}`)} },`
    : "";
  const bodySchema = body ? `body ${isBodyOptional ? "?" : ""}: ${body.schema},` : "";

  const content = `\
    import { useQuery } from "@tanstack/react-query";

    import { QueryProps } from "~/__generated__/types/api-base.type";
    import { authClient as client } from "~/auth/services/client.service";

    ${hasInput ? `import { flattenObject } from "~shared/utils/object.util";` : ""}
    ${hasInput ? `import { DeepPartial } from "~shared/types/base.type";` : ""}

    ${hasImports ? `import { ${imports.join(", ")} } from "~/__generated__/types/swagger.type";` : ""}

    ${hasInput ? `export type ${inputTypeName} = { ${paramsSchema} ${queriesSchema} ${bodySchema} }` : ""}

    export type ${responseTypeName} = ${response}

    export type ${hookPropsName} = QueryProps<${responseTypeName} ${hasInput ? `, ${inputTypeName}` : ""}>

    export const ${genKeyFnName} = ( ${hasInput ? `input: DeepPartial<${inputTypeName}> = {}` : ""} ) => ['${method}', '${endpoint}', ${hasInput ? `flattenObject(input)` : ""}]

    export async function ${functionName}(${hasInput ? `{${destructInput}}: ${inputTypeName}` : ""}) {
      const { data } = await client<${responseTypeName}>({
        method: "${method}",
        url: \`${endpoint.replace(/{([^}]*)}/g, (_, p) => `\${params.${p}}`)}\`,
        ${body ? `data: body,` : ""}\
        ${queries.length ? `params: queries,` : ""}\
      });

      return data;
    }

    export function ${hookName}(
      ${hasInput ? `{ ${destructInput} ...options }` : "options"}: ${hookPropsName} ${isAllInputOptional ? "= {}" : ""}
    ) {
      return useQuery({
        queryKey: ${genKeyFnName}(${hasInput ? `{ ${destructInput} }` : ""}),
        queryFn: () => ${functionName}(${hasInput ? `{ ${destructInput} }` : ""}),
        ...options,
      });
    }
  `;

  write(path.join(TANSTACK_QUERY_HOOKS_DIR, fileName), content);
}

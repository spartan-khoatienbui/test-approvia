import { genSchemaType } from "~scripts/gen-api/modules/typescript/gen-types";
import { isParameterObject, isReferenceSchema } from "~scripts/gen-api/utils/guard";
import { camelCase, has, partition } from "lodash-es";
import { OpenAPIV3 } from "openapi-types";

export function genInputType({ parameters, requestBody }: OpenAPIV3.OperationObject) {
  const imports: Array<string> = [];

  const [queries, params] = partition(
    parameters?.filter(isParameterObject).map((q) => {
      if (!q.schema) return null;

      return {
        name: camelCase(q.name),
        type: q.in,
        schema: genSchemaType(q.schema, { onRefGen: (name) => imports.push(name) }),
        required: q.required,
      };
    }),
    (q) => q?.type === "query",
  );

  const body = (() => {
    if (!requestBody) return;

    if (isReferenceSchema(requestBody)) {
      return {
        type: "application/json",
        schema: requestBody.$ref.split("/").pop()!,
        required: true,
      };
    }

    const type = has(requestBody.content, "application/json") ? "application/json" : "multipart/form-data";

    return {
      type,
      schema: genSchemaType(requestBody.content[type]?.schema ?? {}, { onRefGen: (name) => imports.push(name) }),
      required: requestBody.required,
    };
  })();

  return { imports, queries, params, body };
}

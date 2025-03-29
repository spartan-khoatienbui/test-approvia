import { genSchemaType } from "~scripts/gen-api/modules/typescript/gen-types";
import { isReferenceSchema } from "~scripts/gen-api/utils/guard";
import { OpenAPIV3 } from "openapi-types";

export function genResponseType(operation: OpenAPIV3.OperationObject) {
  const schema = (operation.responses["200"] as OpenAPIV3.ResponseObject)?.content?.["application/json"].schema;
  if (!schema) return { imports: [], body: "never" };

  if (isReferenceSchema(schema)) {
    const type = schema.$ref.split("/").pop()!;
    return { imports: [type], response: type };
  }

  const imports: Array<string> = [];
  const response = genSchemaType(schema, {
    onRefGen: (name) => imports.push(name),
  });

  return { imports, response };
}

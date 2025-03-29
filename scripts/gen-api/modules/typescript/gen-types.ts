import { SWAGGER_TYPE_PATH } from "~scripts/gen-api/configs/config";
import { isStringSchema, isReferenceSchema, isArraySchema } from "~scripts/gen-api/utils/guard";
import { write } from "~scripts/gen-api/utils/write-file";
import { camelCase } from "lodash-es";
import { OpenAPIV3 } from "openapi-types";

import { Maybe } from "~shared/types/base.type";

export function genComponentsSchemaTypes(schemas: OpenAPIV3.ComponentsObject["schemas"] = {}) {
  const types = Object.entries(schemas).map(([rawName, schema]) => {
    const name = formatTypeName(rawName);

    if (isStringSchema(schema) && schema.enum) {
      return `
        export enum ${name} {
          ${schema.enum.map((value) => `${value} = "${value}"`).join(",\n")}
        }`;
    }

    return `export type ${name} = ${genSchemaType(schema)};`;
  });
  write(SWAGGER_TYPE_PATH, types.join("\n"));
}

// ------------------------------------
export function genSchemaType(
  schema: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject,
  opts: {
    onRefGen?: (name: string) => void;
  } = {},
): Maybe<string> {
  if (!schema) return;

  const { onRefGen } = opts;

  if (isReferenceSchema(schema)) {
    const name = formatTypeName(schema.$ref.split("/").pop()!);
    onRefGen?.(name);

    return name;
  }

  const withNullable = (type: string) => (schema.nullable ? `${type} | null` : type);

  if (isArraySchema(schema)) return withNullable(`Array<${genSchemaType(schema.items, opts)}>`);

  if (schema.type === "boolean") return withNullable("boolean");
  if (schema.type === "integer" || schema.type === "number") return withNullable("number");
  if (schema.type === "string") return withNullable(schema.enum?.map((value) => `'${value}'`).join("|") ?? "string");

  // INFO: from here, schema.type === "object"
  const { properties, required = [], allOf, oneOf, additionalProperties } = schema;

  if (properties) {
    return withNullable(`{
      ${Object.entries(properties)
        .map(([name, property]) => {
          const requiredMark = required.includes(name) ? "" : "?";

          return `${formatPropertyName(name)}${requiredMark}: ${genSchemaType(property, opts)};`;
        })
        .join("\n")}
    }`);
  }

  if (allOf) {
    return withNullable(allOf.map((schema) => genSchemaType(schema, opts)).join(" & "));
  }

  if (oneOf) {
    return withNullable(oneOf.map((schema) => genSchemaType(schema, opts)).join(" | "));
  }

  if (additionalProperties) {
    return withNullable(
      `Record<string, ${additionalProperties === true ? "unknown" : genSchemaType(additionalProperties, opts)}>`,
    );
  }
}

// --------------
const formatTypeName = (type: string) => type.replace(/\./g, "");
const formatPropertyName = (name: string) => camelCase(name);

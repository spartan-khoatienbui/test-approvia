import { OpenAPIV3 } from "openapi-types";

type NonArraySchema<T extends OpenAPIV3.NonArraySchemaObjectType> = OpenAPIV3.SchemaObject & {
  type: T;
};

export const isReferenceSchema = (obj: object = {}): obj is OpenAPIV3.ReferenceObject => "$ref" in obj;

export const isArraySchema = (obj: object = {}): obj is OpenAPIV3.ArraySchemaObject =>
  "type" in obj && obj.type === "array";

export const isBooleanSchema = (obj: object = {}): obj is NonArraySchema<"boolean"> =>
  "type" in obj && obj.type === "boolean";

export const isNumberSchema = (obj: object = {}): obj is NonArraySchema<"number" | "integer"> =>
  "type" in obj && (obj.type === "number" || obj.type === "integer");

export const isStringSchema = (obj: object = {}): obj is NonArraySchema<"string"> =>
  "type" in obj && obj.type === "string";

export const isObjectSchema = (obj: object = {}): obj is OpenAPIV3.SchemaObject =>
  "type" in obj && obj.type === "object";

export const isParameterObject = (obj: object = {}): obj is OpenAPIV3.ParameterObject => "in" in obj;

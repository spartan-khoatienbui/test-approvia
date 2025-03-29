import { OpenAPIV3 } from "openapi-types";

export type Task<T = unknown> = {
  label: string;
  description?: string;
  fn: () => Promise<T> | T;
};

export type EndpointNameConfig = Record<`${OpenAPIV3.HttpMethods} ${string}`, string>;

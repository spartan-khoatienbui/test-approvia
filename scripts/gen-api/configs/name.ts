import { EndpointNameConfig } from "~scripts/gen-api/types";

export const QUERIES = {
  "get /api/user/me": "GET_ME",
} satisfies EndpointNameConfig;

export const MUTATIONS = {
  "put /api/user/me": "UPDATE_ME",
} satisfies EndpointNameConfig;

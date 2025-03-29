import { MUTATIONS, QUERIES } from "~scripts/gen-api/configs/name";
import { genMutationHook } from "~scripts/gen-api/modules/tanstack-query/gen-mutation-hook";
import { genQueryHook } from "~scripts/gen-api/modules/tanstack-query/gen-query-hook";
import { OpenAPIV3 } from "openapi-types";

export async function genTanstackHooks(paths: OpenAPIV3.PathsObject | undefined = {}) {
  for (const [query, name] of Object.entries(QUERIES)) {
    const [method, endpoint] = query.split(" ") as [OpenAPIV3.HttpMethods, string];

    const schema = paths[endpoint]?.[method];
    if (!schema) continue;

    genQueryHook({ method, endpoint, schema, name });
  }

  for (const [mutation, name] of Object.entries(MUTATIONS)) {
    const [method, endpoint] = mutation.split(" ") as [OpenAPIV3.HttpMethods, string];

    const schema = paths[endpoint]?.[method];
    if (!schema) continue;

    genMutationHook({ method, endpoint, schema, name });
  }
}

import { OUTPUT_DIR, SWAGGER_FILE } from "~scripts/gen-api/configs/config";
import { genBaseType } from "~scripts/gen-api/modules/core/gen-base-type";
import { getSwaggerContent } from "~scripts/gen-api/modules/core/get-swagger-content";
import { genTanstackHooks } from "~scripts/gen-api/modules/tanstack-query/gen-tanstack-hooks";
import { genComponentsSchemaTypes } from "~scripts/gen-api/modules/typescript/gen-types";
import { Task } from "~scripts/gen-api/types";
import { visualizeProgress } from "~scripts/gen-api/utils/terminal";
import { exec } from "child_process";
import { OpenAPIV3 } from "openapi-types";

(async () => {
  let document: OpenAPIV3.Document | undefined;

  const TASKS: Array<Task> = [
    {
      label: "Generate base types",
      fn: () => genBaseType(),
    },
    {
      label: "Get swagger content",
      description: SWAGGER_FILE,
      fn: () => getSwaggerContent(SWAGGER_FILE).then((doc) => (document = doc)),
    },
    {
      label: "Generate components schema types",
      fn: () => genComponentsSchemaTypes(document?.components?.schemas),
    },
    {
      label: "Generate tanstack query hooks",
      fn: () => genTanstackHooks(document?.paths),
    },
    {
      label: "Format & lint",
      fn: () => {
        exec(`eslint --fix ${OUTPUT_DIR}`);
        exec(`prettier  -w -c  ${OUTPUT_DIR}`);
      },
    },
  ];

  for (const task of TASKS) {
    await visualizeProgress(task);
  }
})();

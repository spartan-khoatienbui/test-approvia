import path from "path";

export const SWAGGER_FILE = "https://service-atlas.dev.hirespartan.io/swagger/service-atlas-v1.0.yml";
export const OUTPUT_DIR = "./src/__generated__";

export const BASE_TYPE_PATH = path.join(OUTPUT_DIR, "types/api-base.type.ts");
export const SWAGGER_TYPE_PATH = path.join(OUTPUT_DIR, "types/swagger.type.ts");

export const TANSTACK_QUERY_HOOKS_DIR = path.join(OUTPUT_DIR, "hooks");

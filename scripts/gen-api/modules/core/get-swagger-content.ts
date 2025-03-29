import { OpenAPIV3 } from "openapi-types";
import YAML from "yaml";

export async function getSwaggerContent(path: string): Promise<OpenAPIV3.Document> {
  const content = await fetch(path)
    .then((res) => res.text())
    .then(YAML.parse);

  return content;
}

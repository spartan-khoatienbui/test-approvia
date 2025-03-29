import { exec } from "child_process";
import fs from "fs";
import { camelCase, upperFirst } from "lodash-es";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dir = path.join(__dirname, "../src/assets/icons");
const files = fs.readdirSync(dir).filter((file) => path.extname(file) === ".svg");

const lines = files.map((file) => {
  const componentName = `Icon${upperFirst(camelCase(file.slice(0, -".svg".length)))}`;

  return `export { default as ${componentName} } from "./${file}?react";`;
});

const barrelFile = path.join(__dirname, "../src/assets/icons/index.ts");
fs.writeFileSync(barrelFile, lines.join("\n"));
exec(`eslint --fix ${barrelFile}`);
exec(`npx prettier --write ${barrelFile}`);

console.log(`✨ Generated ${lines.length} icons.`);

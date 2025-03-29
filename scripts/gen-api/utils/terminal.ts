import { Task } from "~scripts/gen-api/types";
import originChalk from "chalk";
import originOra from "ora";

export const chalk = originChalk;
export const ora = originOra;

export async function visualizeProgress<T>(opts: Task<T>) {
  const { label, description = "", fn } = opts;
  const spinner = ora({ text: `${label} ${chalk.gray(description)}` }).start();

  try {
    const result = await fn();
    spinner.succeed();
    return result;
  } catch (error) {
    spinner.fail(label);
    ora({ text: String(error), indent: 2 }).fail();

    console.trace(error);

    throw Error(String(error));
  }
}

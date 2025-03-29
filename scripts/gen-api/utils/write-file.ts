import fs from "fs";
import path from "path";

export function write(
  filePath: string,
  content: string,
  opts: {
    onError?: (err: NodeJS.ErrnoException) => void;
    onSuccess?: () => void;
  } = {},
) {
  const { onError, onSuccess } = opts;

  const dirPath = path.dirname(filePath);
  !fs.existsSync(dirPath) && fs.mkdirSync(dirPath, { recursive: true });

  fs.writeFile(filePath, content, (error) => {
    if (error) {
      onError?.(error);
      return;
    }

    onSuccess?.();
  });
}

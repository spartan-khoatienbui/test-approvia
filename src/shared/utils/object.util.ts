import { flatMap, isPlainObject } from "lodash-es";

export function flattenObject(obj: Record<string, unknown>, prefix = ""): Record<string, unknown> {
  const processEntry = ([key, value]: [string, unknown]): Record<string, unknown> => {
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (isPlainObject(value)) {
      return flattenObject(value as Record<string, unknown>, prefixedKey);
    }

    return { [prefixedKey]: value };
  };

  const flattenedEntries = flatMap(Object.entries(obj), processEntry);

  return Object.assign({}, ...flattenedEntries);
}

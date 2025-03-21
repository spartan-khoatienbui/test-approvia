import { FormRule as Rule } from "antd";

export const required = (message?: string): Rule => ({
  required: true,
  message,
});

export const minNumericValue = (minNo: number, message?: string): Rule => ({
  validator: (_, value: string) => {
    if (isNaN(Number(value))) return Promise.reject("Must be a number");
    if (Number(value) < minNo) {
      return Promise.reject(message || `Must not be less than ${minNo}`);
    }
    return Promise.resolve();
  },
});

export const maxCharacters = (maxNo: number, message?: string): Rule => ({
  max: maxNo,
  message,
});

export const maxArrayLen = (maxLen: number, message?: string): Rule => ({
  validator: (_, value) => {
    if (value.length < maxLen) {
      return Promise.reject(message || `At least ${maxLen} items are required`);
    }
    return Promise.resolve();
  },
});

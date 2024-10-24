import type { AxiosError } from "axios";

import { App } from "antd";
import { first, isString } from "lodash-es";
import { createElement } from "react";

import { IconError, IconSuccess, IconWarning, IconInfo } from "@icons";
import { BaseError } from "@shared/types/error.type";

export function useNotification() {
  const { notification } = App.useApp();

  const showError = (error: AxiosError<BaseError> | string) => {
    const content = isString(error) ? error : first(error?.response?.data.messages);
    notification.error({
      message: "Error",
      description: content ?? "Something went wrong",
      className: "p-3",
      icon: createElement(IconError, { className: "text-red-500" }),
    });
  };

  const showSuccess = (message: string) => {
    notification.success({
      message: "Success",
      description: message,
      className: "p-3",
      icon: createElement(IconSuccess, { className: "text-green-500" }),
    });
  };

  const showWarning = (message: string) => {
    notification.warning({
      message: "Warning",
      description: message,
      className: "p-3",
      icon: createElement(IconWarning, { className: "text-amber-500" }),
    });
  };

  const showInfo = (message: string) => {
    notification.info({
      message: "Info",
      description: message,
      className: "p-3",
      icon: createElement(IconInfo, { className: "text-sky-500" }),
    });
  };

  return { showError, showSuccess, showWarning, showInfo };
}

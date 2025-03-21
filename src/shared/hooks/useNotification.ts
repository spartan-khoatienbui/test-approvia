import type { AxiosError } from "axios";

import { CheckCircle, Info, Warning, XCircle } from "@phosphor-icons/react";
import { App } from "antd";
import { isString } from "lodash-es";
import { createElement } from "react";

// import { IconError, IconInfo, IconSuccess, IconWarning } from "~icons";
import { BaseError } from "~shared/types/error.type";

export function useNotification() {
  const { notification } = App.useApp();

  const showError = (error: AxiosError<BaseError> | string) => {
    const content = isString(error) ? error : error?.response?.data.message;
    notification.error({
      message: "Error",
      description: content ?? "Something went wrong",
      className: "p-3",
      icon: createElement(XCircle, {
        className: "text-red-500",
        weight: "fill",
      }),
    });
  };

  const showSuccess = (message: string) => {
    notification.success({
      message: "Success",
      description: message,
      className: "p-3",
      icon: createElement(CheckCircle, {
        className: "text-green-500",
        weight: "fill",
      }),
    });
  };

  const showWarning = (message: string) => {
    notification.warning({
      message: "Warning",
      description: message,
      className: "p-3",
      icon: createElement(Warning, {
        className: "text-amber-500",
        weight: "fill",
      }),
    });
  };

  const showInfo = (message: string) => {
    notification.info({
      message: "Info",
      description: message,
      className: "p-3",
      icon: createElement(Info, { className: "text-sky-500", weight: "fill" }),
    });
  };

  return { showError, showSuccess, showWarning, showInfo };
}

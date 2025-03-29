import type { PropsWithChildren } from "react";

import { Spin, SpinProps } from "antd";

type SpinnerProps = PropsWithChildren<{
  spinning?: boolean;
  size?: SpinProps["size"];
}>;

export function Spinner({ spinning, size, children }: SpinnerProps) {
  return spinning ? <Spin className="my-4 w-full" spinning={spinning} size={size} /> : children;
}

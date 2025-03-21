import { Typography } from "antd";
import { PropsWithChildren } from "react";

import { cn } from "~shared/utils/cn.util";

type SubtitleProps = PropsWithChildren<{
  className?: string;
}>;

export function Subtitle({ children, className }: SubtitleProps) {
  return (
    <Typography.Title className={cn("grow m-0", className)} level={2}>
      {children}
    </Typography.Title>
  );
}

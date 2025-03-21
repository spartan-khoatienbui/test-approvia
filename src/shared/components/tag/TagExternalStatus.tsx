import { Tag } from "antd";
import { cva } from "class-variance-authority";

import { ProjectSchedulerStatus } from "~/__generated__/api/types/swagger.ts";

const variant = cva("border-none text-sm h-6.5 leading-6.5 px-2 m-0", {
  variants: {
    status: {
      [ProjectSchedulerStatus.Active]: "bg-green-1 text-green-2",
      [ProjectSchedulerStatus.Deactivated]: "bg-red-tertiary text-red-1",
    },
  },
  defaultVariants: {
    status: ProjectSchedulerStatus.Active,
  },
});

type TagDailyReportExternalStatusProps = {
  status?: ProjectSchedulerStatus;
};

export function TagExternalStatus({
  status,
}: TagDailyReportExternalStatusProps) {
  if (!status) return null;
  return (
    <Tag className={variant({ status })}>
      {status === ProjectSchedulerStatus.Active ? "Enable" : "Disable"}
    </Tag>
  );
}

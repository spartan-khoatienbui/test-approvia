import { Tag } from "antd";
import { cva } from "class-variance-authority";
import { capitalize, startCase } from "lodash-es";

import { ThirdPartyStatus } from "~/__generated__/api/types/swagger";

const variant = cva(
  "border-none font-medium h-6 inline-flex items-center px-2",
  {
    variants: {
      status: {
        [ThirdPartyStatus.Connected]: "bg-green-1 text-green-2",
        [ThirdPartyStatus.Disconnected]: "bg-red-tertiary text-red-1",
        [ThirdPartyStatus.NotConnected]: "bg-red-tertiary text-red-1",
        [ThirdPartyStatus.Processing]: "bg-orange-1 text-orange-2",
      },
    },
    defaultVariants: {
      status: ThirdPartyStatus.Disconnected,
    },
  },
);

type TagServiceStatusProps = {
  status?: ThirdPartyStatus;
  className?: string;
};

export function TagServiceStatus({ status, className }: TagServiceStatusProps) {
  if (!status) return null;

  return (
    <Tag className={variant({ status, className })}>
      {capitalize(startCase(status))}
    </Tag>
  );
}

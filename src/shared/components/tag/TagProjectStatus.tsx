import { Tag, TagProps } from "antd";
import { cva, VariantProps } from "class-variance-authority";
import { capitalize, startCase } from "lodash-es";

import { ProjectStatus } from "~/__generated__/api/types/swagger.ts";

const tagProjectVariant = cva(
  "border-none text-xs h-6.5 leading-6.5 px-2 font-medium m-0",
  {
    variants: {
      status: {
        [ProjectStatus.NotStarted]: "text-typo",
        [ProjectStatus.OnGoing]: "bg-blue-1 text-blue-3",
        [ProjectStatus.Completed]: "bg-green-1 text-green-2",
        [ProjectStatus.Pending]: "bg-orange-1 text-orange-2",
        [ProjectStatus.InProposal]: "bg-violet-1 text-violet-2",
        [ProjectStatus.Canceled]: "bg-red-tertiary text-red-1",
      },
    },
    defaultVariants: {
      status: ProjectStatus.NotStarted,
    },
  },
);

type TagProjectProps = VariantProps<typeof tagProjectVariant> & TagProps;

export function TagProjectStatus({
  status,
  className,
  ...props
}: TagProjectProps) {
  if (!status) return null;

  return (
    <Tag className={tagProjectVariant({ status, className })} {...props}>
      {capitalize(startCase(status))}
    </Tag>
  );
}

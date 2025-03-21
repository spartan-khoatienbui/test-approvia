import { Tag } from "antd";
import { cva, VariantProps } from "class-variance-authority";
import { capitalize, startCase } from "lodash-es";

import { RecruitmentPriority } from "~shared/types/mock.type";

const tagRecruitmentPriorityVariant = cva(
  "border-none text-sm h-6.5 leading-6.5 px-2 m-0",
  {
    variants: {
      status: {
        [RecruitmentPriority.High]: "bg-red-tertiary text-red-1",
        [RecruitmentPriority.Medium]: "bg-yellow-1 text-yellow-2",
        [RecruitmentPriority.Low]: "bg-green-1 text-green-2",
      },
    },
    defaultVariants: {
      status: RecruitmentPriority.Low,
    },
  },
);

type TagRecruitmentPriorityProps = VariantProps<
  typeof tagRecruitmentPriorityVariant
> & {
  name: string;
};

export function TagRecruitmentPriority({
  name,
  status,
}: TagRecruitmentPriorityProps) {
  return (
    <Tag className={tagRecruitmentPriorityVariant({ status })}>
      {capitalize(startCase(name))}
    </Tag>
  );
}

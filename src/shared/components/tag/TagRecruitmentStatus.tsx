import { Tag } from "antd";
import { cva, VariantProps } from "class-variance-authority";
import { capitalize, startCase } from "lodash-es";

import { RecruitmentStatus } from "~shared/types/mock.type";

const tagRecruitmentStatusVariant = cva(
  "border-none text-sm h-6.5 leading-6.5 px-2 m-0",
  {
    variants: {
      status: {
        [RecruitmentStatus.OnGoing]: "bg-blue-1 text-blue-3",
        [RecruitmentStatus.Processing]: "bg-blue-1 text-blue-3",
      },
    },
    defaultVariants: {
      status: RecruitmentStatus.OnGoing,
    },
  },
);

type TagRecruitmentStatusProps = VariantProps<
  typeof tagRecruitmentStatusVariant
> & {
  name: string;
};

export function TagRecruitmentStatus({
  name,
  status,
}: TagRecruitmentStatusProps) {
  return (
    <Tag className={tagRecruitmentStatusVariant({ status })}>
      {capitalize(startCase(name))}
    </Tag>
  );
}

import { Tag, TagProps } from "antd";
import { cva, VariantProps } from "class-variance-authority";
import { capitalize, startCase } from "lodash-es";

import { UserStatus } from "~/__generated__/api/types/swagger";

const tagUserVariant = cva(
  "border-none text-xs h-6.5 leading-6.5 px-2 font-medium m-0",
  {
    variants: {
      status: {
        [UserStatus.Active]: "bg-green-1 text-green-2",
        [UserStatus.Deactivated]: "text-typo",
        [UserStatus.Pending]: "bg-orange-1 text-orange-2",
      },
    },
    defaultVariants: {
      status: UserStatus.Active,
    },
  },
);

type TagUserProps = VariantProps<typeof tagUserVariant> & TagProps;

export function TagUserStatus({ status, className, ...props }: TagUserProps) {
  if (!status) return null;

  return (
    <Tag className={tagUserVariant({ status, className })} {...props}>
      {capitalize(startCase(status))}
    </Tag>
  );
}

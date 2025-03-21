import { Tag, TagProps } from "antd";
import { cva, VariantProps } from "class-variance-authority";
import { capitalize, startCase } from "lodash-es";

import { ProjectType } from "~/__generated__/api/types/swagger.ts";

const tagProjectVariant = cva(
  "border-none text-xs h-6.5 leading-6.5 px-2 font-medium m-0",
  {
    variants: {
      type: {
        [ProjectType.Internal]: "bg-blue-1 text-blue-3",
        [ProjectType.External]: "bg-green-1 text-green-2",
      },
    },
    defaultVariants: {
      type: ProjectType.External,
    },
  },
);

type TagProjectProps = VariantProps<typeof tagProjectVariant> & TagProps;

export function TagProjectType({ type, className, ...props }: TagProjectProps) {
  if (!type) return null;

  return (
    <Tag className={tagProjectVariant({ type, className })} {...props}>
      {capitalize(startCase(type))}
    </Tag>
  );
}

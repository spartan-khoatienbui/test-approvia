import { Tag as AntTag, TagProps as AntTagProps } from "antd";
import { cva, VariantProps } from "class-variance-authority";
import { capitalize, startCase } from "lodash-es";

const tagVariant = cva("border-none text-xs h-6.5 leading-6.5 px-2 font-medium m-0", {
  variants: {
    color: {
      default: "text-typo",
      blue: "bg-blue-1 text-blue-3 [&_svg]:fill-blue-3",
      green: "bg-green-1 text-green-2 [&_svg]:fill-green-2",
      orange: "bg-orange-1 text-orange-2 [&_svg]:fill-orange-2",
      violet: "bg-violet-1 text-violet-2 [&_svg]:fill-violet-2",
      cancel: "bg-red-tertiary text-red-1 [&_svg]:fill-red-1",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

type TagProps = VariantProps<typeof tagVariant> & AntTagProps & { name?: string };

export function Tag({ name, color, className, children, ...props }: TagProps) {
  return (
    <AntTag className={tagVariant({ color, className })} {...props}>
      {children || capitalize(startCase(name))}
    </AntTag>
  );
}

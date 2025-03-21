import { Tag } from "antd";
import { cva } from "class-variance-authority";

const variant = cva("border-none text-sm h-6.5 leading-6.5 px-2 m-0", {
  variants: {
    status: {
      true: "bg-green-1 text-green-2",
      false: "bg-red-tertiary text-red-1",
    },
  },
  defaultVariants: {
    status: true,
  },
});

type TagSkipHolidayProps = {
  status: boolean;
};

export function TagSkipHoliday({ status }: TagSkipHolidayProps) {
  return (
    <Tag className={variant({ status })}>{status ? "Enable" : "Disable"}</Tag>
  );
}

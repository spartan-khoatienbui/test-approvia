import { Tag } from "antd";
import { capitalize, kebabCase } from "lodash-es";

import { ContractType } from "~/__generated__/api/types/swagger";
import { Maybe } from "~shared/types/base.type";
import { cn } from "~shared/utils/cn.util";

type TagContractTypeProps = {
  type: Maybe<ContractType>;
};

export function TagContractType({ type }: TagContractTypeProps) {
  if (!type) return <p>-</p>;

  return (
    <Tag
      className={cn("h-5.5 px-2 border-none font-medium", {
        "bg-green-1 text-green-2": type === ContractType.FullTime,
        "bg-violet-1 text-violet-2": type === ContractType.PartTime,
        "bg-orange-1 text-orange-2": type === ContractType.Intern,
      })}
    >
      {capitalize(kebabCase(type))}
    </Tag>
  );
}

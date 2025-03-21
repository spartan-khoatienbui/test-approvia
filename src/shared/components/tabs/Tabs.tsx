import styled from "@emotion/styled";
import { TabsProps, Tabs as AntTabs } from "antd";

import { cn } from "~shared/utils/cn.util";
import { getCSSVariable } from "~shared/utils/get-css-variable.util";

const StyledTabs = styled(AntTabs)`
  .c0x12c-tabs-tab {
    --c0x12c-tabs-item-color: ${getCSSVariable("--color-secondary")};
    --c0x12c-tabs-item-hover-color: ${getCSSVariable("--color-typo")};
    --c0x12c-tabs-item-selected-color: ${getCSSVariable("--color-typo")};
  }
  .c0x12c-tabs-ink-bar {
    --c0x12c-tabs-ink-bar-color: ${getCSSVariable("--color-typo")};
  }
`;

export function Tabs({ children, items, className, ...props }: TabsProps) {
  return (
    <StyledTabs
      {...props}
      className={cn("[&_.c0x12c-tabs-nav:before]:hidden", className)}
      items={items?.map(({ label, ...item }) => ({
        ...item,
        label: <div className="px-3 font-medium">{label}</div>,
      }))}
    >
      {children}
    </StyledTabs>
  );
}

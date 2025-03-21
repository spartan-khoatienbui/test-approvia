import styled from "@emotion/styled";
import { Drawer as AntDrawer, DrawerProps } from "antd";

const StyledAntDrawer = styled(AntDrawer)`
  .c0x12c-drawer-close {
    order: 2;
    margin: 0;
  }
  .c0x12c-drawer-header {
    border: none;
    padding: 24px;
  }
  .c0x12c-drawer-body {
    padding: 0 24px;
  }

  .c0x12c-drawer-footer {
    padding: 16px 24px;
  }
`;

export function Drawer({ children, ...props }: DrawerProps) {
  return <StyledAntDrawer {...props}>{children}</StyledAntDrawer>;
}

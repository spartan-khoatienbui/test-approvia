import styled from "@emotion/styled";
import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { Button, Layout, Menu } from "antd";
import { MainComponent } from "iconsax-react";

import { LogoSquare } from "~shared/components/logo/LogoSquare";
import { SidebarItem } from "~shared/types/sidebar.type";
import { cn } from "~shared/utils/cn.util";
import { alpha } from "~shared/utils/colors.util";
import { getCSSVariable } from "~shared/utils/get-css-variable.util";

const StyledMenu = styled(Menu)`
  .c0x12c-menu-item,
  .c0x12c-menu-submenu-title {
    transition: none;
    margin: 0 0 4px 0;
    height: 48px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0 10px !important;
    color: var(--color-gray-4) !important;

    &:hover {
      background-color: ${alpha(getCSSVariable("--color-gray-2"), 0.2)} !important;
    }
    &.c0x12c-menu-item-selected {
      background-color: ${alpha(getCSSVariable("--color-primary"), 0.3)} !important;
    }

    .c0x12c-menu-item-icon {
      font-size: 20px;
    }
    .c0x12c-menu-title-content {
      margin: 0 !important;
    }
  }

  &.c0x12c-menu-inline-collapsed {
    .c0x12c-menu-item,
    .c0x12c-menu-submenu-title {
      padding: 0;
      flex-direction: column;
      justify-content: center;
      height: 72px;

      .c0x12c-menu-item-icon {
        font-size: 24px;
      }
      .c0x12c-menu-title-content {
        opacity: 1 !important;
        font-size: 10px;
        line-height: 1;
      }
    }
  }

  .c0x12c-menu-sub .c0x12c-menu-item {
    padding-left: 36px !important;
  }
`;

const SIDEBAR_ITEMS: Array<SidebarItem> = [{ path: "/", icon: MainComponent, label: "Dashboard" }];

type SidebarProps = {
  collapsed: boolean;
  onCollapseButtonClick: (collapsed: boolean) => void;
};

export function Sidebar({ collapsed, onCollapseButtonClick }: SidebarProps) {
  const navigate = useNavigate();
  const currentPath = useLocation({ select: (location) => location.pathname });

  const iconSize = collapsed ? 24 : 20;

  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className={cn(
        "py-8 px-4 bg-gray-3",
        "[&_.c0x12c-layout-sider-children]:flex [&_.c0x12c-layout-sider-children]:flex-col",
        { "px-3": collapsed },
      )}
      collapsedWidth={96}
    >
      <Link
        to="/"
        className={cn("flex items-center gap-3 mb-8 text-white", {
          "gap-0 justify-center": collapsed,
        })}
      >
        <LogoSquare width={36} height={36} className="shrink-0" variant="white" />
        <span className={cn("text-2xl font-semibold transition-all overflow-hidden", { "w-0": collapsed })}>Atlas</span>
      </Link>

      <div className="grow">
        <StyledMenu
          className="border-none bg-transparent"
          _internalDisableMenuItemTitleTooltip
          selectedKeys={[currentPath]}
          items={SIDEBAR_ITEMS.map(({ path, icon: Icon, label, children }) => ({
            key: path || label,
            icon: <Icon size={iconSize} variant={path && currentPath.startsWith(path) ? "Bold" : "Linear"} />,
            label,
            onClick: () => path && navigate({ to: path }),
            children: children?.map(({ path, icon: ChildIcon, label }) => ({
              key: path,
              icon: <ChildIcon size={iconSize} variant={path && currentPath.startsWith(path) ? "Bold" : "Linear"} />,
              label,
              onClick: () => path && navigate({ to: path }),
            })),
          }))}
          mode="inline"
        />
      </div>

      <Button
        type="text"
        className={cn("size-10 p-0 text-2xl text-gray-4", {
          "translate-x-4": collapsed,
        })}
        onClick={() => onCollapseButtonClick(!collapsed)}
      >
        Toggle
      </Button>
    </Layout.Sider>
  );
}

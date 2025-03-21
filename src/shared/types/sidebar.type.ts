import { Icon } from "iconsax-react";

import { ToPath } from "~shared/types/route.type";

export type SidebarItem = {
  path?: ToPath;
  icon: Icon;
  label: string;
  children?: Array<SidebarItem>;
};

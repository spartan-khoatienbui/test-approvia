import { SignOut, UserCircle } from "@phosphor-icons/react";
import { useNavigate } from "@tanstack/react-router";
import { Avatar, Button, Divider, Layout, Menu, Popover } from "antd";

import { useGetMe } from "~/__generated__/api/hooks/useGetMe";
import { useAuth } from "~/auth/hooks/useAuth";
import { cn } from "~shared/utils/cn.util";

export function Header() {
  const { signOut } = useAuth();
  const { data: user } = useGetMe();
  const navigate = useNavigate();

  return (
    <Layout.Header className="bg-white px-6 py-2 flex items-center border-b border-gray-1 justify-between">
      <Popover
        content={
          <div className="bg-white rounded-2.5 py-1 flex flex-col w-60">
            <Avatar size={32} src={user?.pictureUrl} className="mb-1.5" />
            <span className="mb-1 font-semibold">{user?.name}</span>
            <span className="text-gray-2">{user?.email}</span>

            <Divider
              variant="dashed"
              className="-mx-3 w-[calc(100%+24px)] my-4"
            />

            <Menu
              className={cn(
                "border-none mb-4",
                "[&_li]:flex [&_li]:items-center [&_li]:m-0 [&_li]:px-2.5",
              )}
              items={[
                {
                  key: "my-profile",
                  icon: <UserCircle weight="fill" size={18} />,
                  label: "My profile",
                  onClick: () => navigate({ to: "/" }),
                },
                {
                  key: "log-out",
                  icon: <SignOut size={18} />,
                  label: "Logout",
                  onClick: signOut,
                },
              ]}
            />

            <div className="w-max mx-auto text-gray-2 text-xs">
              Version 1.0.2
            </div>
          </div>
        }
        arrow={false}
        placement="bottomRight"
      >
        <Button type="text" className="px-2 flex items-center gap-2.5">
          <Avatar size={32} src={user?.pictureUrl} />
          <span className="font-medium">{user?.name}</span>
        </Button>
      </Popover>
    </Layout.Header>
  );
}

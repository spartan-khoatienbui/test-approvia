import type { Meta, StoryObj } from "@storybook/react";

import { UserStatus } from "~/__generated__/api/types/swagger.ts";

import { TagUserStatus } from "./TagUserStatus";

const meta = {
  component: TagUserStatus,
  tags: ["autodocs"],
  argTypes: {
    status: { control: "select", options: Object.values(UserStatus) },
  },
} satisfies Meta<typeof TagUserStatus>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    status: UserStatus.Active,
  },
};

export const Deactivated: Story = {
  args: {
    status: UserStatus.Deactivated,
  },
};

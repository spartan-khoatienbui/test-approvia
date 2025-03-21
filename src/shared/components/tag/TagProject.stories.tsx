import type { Meta, StoryObj } from "@storybook/react";

import { ProjectStatus } from "~/__generated__/api/types/swagger";

import { TagProjectStatus } from "./TagProjectStatus";

const meta = {
  component: TagProjectStatus,
  argTypes: {
    status: { control: "text" },
  },
} satisfies Meta<typeof TagProjectStatus>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    status: ProjectStatus.OnGoing,
  },
};

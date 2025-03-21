import type { Meta, StoryObj } from "@storybook/react";

import { ContractType } from "~/__generated__/api/types/swagger.ts";

import { TagContractType } from "./TagContractType";

const meta = {
  component: TagContractType,
  tags: ["autodocs"],
  argTypes: {
    type: { control: "select", options: Object.values(ContractType) },
  },
} satisfies Meta<typeof TagContractType>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FullTime: Story = {
  args: {
    type: ContractType.FullTime,
  },
};

export const PartTime: Story = {
  args: {
    type: ContractType.PartTime,
  },
};

export const Intern: Story = {
  args: {
    type: ContractType.Intern,
  },
};

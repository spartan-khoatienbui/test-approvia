import { Meta, StoryObj } from '@storybook/react';

import Iconify from '~shared/components/atoms/Iconify';

const meta = {
  title: 'Example/Iconify',
  component: Iconify,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Iconify>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: 'bi:person',
  },
};
export const WithColor: Story = {
  args: {
    icon: 'bi:person',
    color: 'red',
  },
};
export const WithWidth: Story = {
  args: {
    icon: 'bi:person',
    width: 40,
  },
};
export const WithSx: Story = {
  args: {
    icon: 'bi:person',
    sx: {
      color: 'blue',
      fontSize: 40,
      fill: 'blue',
    },
  },
};
export const WithCustomIcon: Story = {
  args: {
    icon: 'bi:person',
    sx: {
      color: 'error',
      fontSize: 40,
    },
  },
};

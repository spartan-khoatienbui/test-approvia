import { Meta, StoryObj } from '@storybook/react';

import SvgColor from '~shared/components/atoms/SvgColor';

const meta = {
  title: 'Example/SvgColor',
  component: SvgColor,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SvgColor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'src/stories/assets/github.svg',
  },
};

export const WithSx: Story = {
  args: {
    src: 'src/stories/assets/github.svg',
    sx: {
      color: 'red',
    },
  },
};

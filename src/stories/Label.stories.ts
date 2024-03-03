import { Meta, StoryObj } from '@storybook/react';

import Label from '~shared/components/atoms/Label';

const meta = {
  title: 'Example/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

// Test stories
export const Default: Story = {
  args: {
    children: 'Default Label',
  },
};

export const PrimaryFilled: Story = {
  args: {
    children: 'Primary Filled',
    color: 'primary',
    variant: 'filled',
  },
};
export const SecondaryOutlined: Story = {
  args: {
    children: 'Secondary Outlined',
    color: 'secondary',
    variant: 'outlined',
  },
};

// export const InfoSoftWithIcons: Story = {
//   args: {
//     children: 'Info Soft with Icons',
//     color: 'info',
//     variant: 'soft',
//     startIcon: '1',
//     endIcon: '1',
//   },
// };

export const CustomStyles: Story = {
  args: {
    children: 'Custom Styles',
    sx: {
      fontSize: '16px',
      fontWeight: 'bold',
      backgroundColor: 'pink',
      color: 'blue',
    },
  },
};

// export const WithCustomComponents: Story = {
//     args: {
//         children:
//           (<>
//             <span>Hello</span>
//             <strong>World</strong>
//           </>)

//       };

// }

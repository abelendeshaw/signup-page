import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Button from "../app/components/button";

const meta = {
  title: "Button/Default",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultStory: Story = {
  args: {
    children: "Button",
    onClick: () => {},
  },
};

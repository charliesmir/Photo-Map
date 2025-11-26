import type { Meta, StoryObj } from "@storybook/nextjs";

import { Plus } from "./index";

const meta = {
  title: "Atoms/Plus",
  component: Plus,
} satisfies Meta<typeof Plus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
  theme: "light" ,
  },
};

export const Dark: Story = {
  args: {
  theme: "dark" ,
  },
};
import type { Meta, StoryObj } from "@storybook/nextjs";

import { Question } from "./index";

const meta = {
  title: "Atoms/Question",
  component: Question,
} satisfies Meta<typeof Question>;

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
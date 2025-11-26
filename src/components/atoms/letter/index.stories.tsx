import type { Meta, StoryObj } from "@storybook/nextjs";

import { Letter } from "./index";

const meta = {
  title: "Atoms/Letter",
  component: Letter,
} satisfies Meta<typeof Letter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
  theme: "light" ,
  maintext: "Amazing, you are on the right track! No more forgetting where that cosy café was, where you saw the most beautiful sunset of your life and other very important moments.",
  note: "P:S. Don’t forget that you can share memories with your friends as well",
  },
};

export const Dark: Story = {
  args: {
  theme: "dark" ,
  maintext: "Amazing, you are on the right track! No more forgetting where that cosy café was, where you saw the most beautiful sunset of your life and other very important moments.",
  note: "P:S. Don’t forget that you can share memories with your friends as well",
  },
};
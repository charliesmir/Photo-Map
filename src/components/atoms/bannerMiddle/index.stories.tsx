import type { Meta, StoryObj } from "@storybook/nextjs";

import { BannerMiddle } from "./index";

const meta = {
  title: "Atoms/BannerMiddle",
  component: BannerMiddle,
} satisfies Meta<typeof BannerMiddle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
  theme: "light",
  title: "Congratulations!",
  maintext: "You are now officially registered. There is just one tiny step between you and finally keeping track of all your important memories.",
  note: "You probably already know...",
  highlight: "Please, confirm your email :)",
  },
};

export const Dark: Story = {
  args: {
  theme: "dark",
  title: "Congratulations!",
  maintext: "You are now officially registered. There is just one tiny step between you and finally keeping track of all your important memories.",
  note: "You probably already know...",
  highlight: "Please, confirm your email :)",
  },
};
import type { Meta, StoryObj } from "@storybook/nextjs";

import { BannerAccent } from "./index";

const meta = {
  title: "Atoms/BannerAccent",
  component: BannerAccent,
} satisfies Meta<typeof BannerAccent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
  theme: "light" ,
  title: "Try returning to the main page",
  },
};

export const DarkNoSanity: Story = {
  args: {
  theme: "dark" ,
  title: "",
  },
};
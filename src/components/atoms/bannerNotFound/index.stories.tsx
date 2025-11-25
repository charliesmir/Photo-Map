import type { Meta, StoryObj } from "@storybook/nextjs";

import { BannerNotFound } from "./index";

const meta = {
  title: "Atoms/BannerNotFound",
  component: BannerNotFound,
} satisfies Meta<typeof BannerNotFound>;

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
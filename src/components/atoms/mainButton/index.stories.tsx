import type { Meta, StoryObj } from "@storybook/nextjs";

import { MainButton } from "./index";

const meta = {
  title: "Atoms/MainButton",
  component: MainButton,
} satisfies Meta<typeof MainButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BigLight: Story = {
  args: {
    title: "Start creating!",
    size: "large",
    background: true,
    theme: "light" ,
  },
};

export const BigDark: Story = {
  args: {
    title: "Start creating!",
    size: "large",
    background: true,
    theme: "dark" ,
  },
};

export const SmallLight: Story = {
  args: {
    title: "Sign up",
    size: "small",
    background: true,
    theme: "light" ,
  },
};

export const SmallNoBackground: Story = {
  args: {
    title: "Log in",
    size: "small",
    background: false,
    theme: "light" ,
  },
};
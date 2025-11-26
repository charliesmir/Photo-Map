import type { Meta, StoryObj } from "@storybook/nextjs";

import { ButtonExtra } from "./index";

const meta = {
  title: "Atoms/ButtonExtra",
  component: ButtonExtra,
} satisfies Meta<typeof ButtonExtra>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GooleLight: Story = {
  args: {
    title: "Log in with Google",
    type: "google",
    theme: "light" ,
  },
};

export const GoogleDark: Story = {
  args: {
    title: "Log in with Google",
    type: "google",
    theme: "dark" ,
  },
};

export const RegisterLight: Story = {
  args: {
    title: "Register",
    type: "register",
    theme: "light" ,
  },
};

export const RegisterDark: Story = {
  args: {
    title: "Register",
    type: "register",
    theme: "dark" ,
  },
};
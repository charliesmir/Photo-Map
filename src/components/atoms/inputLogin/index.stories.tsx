import type { Meta, StoryObj } from "@storybook/nextjs";

import { InputLogin } from "./index";

const meta = {
  title: "Atoms/InputLogin",
  component: InputLogin,
} satisfies Meta<typeof InputLogin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UsernameLight: Story = {
  args: {
title: "Username",
  type:"text",
  theme:"light",
  },
};
export const PasswordLight: Story = {
  args: {
title: "Password",
  type:"password",
  theme:"light",
  },
};
export const EmailDark: Story = {
  args: {
title: "E-mail",
  type:"text",
  theme:"dark",
  },
};
import type { Meta, StoryObj } from "@storybook/nextjs";

import { AccentButton } from "./index";

const meta = {
  title: "Atoms/AccentButton",
  component: AccentButton,
} satisfies Meta<typeof AccentButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Start creating!",
  },
};
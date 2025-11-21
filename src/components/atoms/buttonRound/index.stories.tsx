import type { Meta, StoryObj } from "@storybook/nextjs";

import { ButtonRound } from "./index";

const meta = {
  title: "Atoms/ButtonRound",
  component: ButtonRound,
} satisfies Meta<typeof ButtonRound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PlusSmallLight: Story = {
  args: {
    image: "icons/add.svg",
  size: "small",
    accent: false,
  theme: "light" ,
  },
};

export const PlusBigDark: Story = {
  args: {
     image: "icons/add.svg",
  size: "large",
accent: false,
  theme: "dark" ,
  },
};

export const SearchLight: Story = {
  args: {
     image: "icons/search.svg",
  size: "small",
accent: false,
  theme: "light" ,
  },
};

export const OkLight: Story = {
  args: {
   image: "icons/check.svg",
  size: "small",
accent: false,
  theme: "light" ,
  },
};
export const ChangeLight: Story = {
  args: {
     image: "icons/edit.svg",
  size: "small",
accent: true,
  theme: "light" ,
  },
};
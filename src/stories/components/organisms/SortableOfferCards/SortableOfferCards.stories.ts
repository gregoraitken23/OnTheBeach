import type { Meta, StoryObj } from "@storybook/react";

import SortableInfoCards from "./SortableOfferCards";
import { offerCardListData } from "../../../OfferCardList.Mocks";

const meta = {
  title: "Example/On The Beach Tech UI",
  component: SortableInfoCards,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "dark" },
  },
} satisfies Meta<typeof SortableInfoCards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { data: offerCardListData },
};

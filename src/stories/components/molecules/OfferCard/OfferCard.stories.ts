import type { Meta, StoryObj } from "@storybook/react";

import { OfferCard } from "../../molecules/OfferCard/OfferCard";
import { offerCardListData } from "../../../OfferCardList.Mocks";

const meta = {
  title: "Example/Molecules/Offer Card",
  component: OfferCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof OfferCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: offerCardListData[0],
};

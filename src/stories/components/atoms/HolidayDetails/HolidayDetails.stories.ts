import type { Meta, StoryObj } from "@storybook/react";

import { HolidayDetails } from "./HolidayDetails";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Atoms/Holiday Details",
  component: HolidayDetails,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof HolidayDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    hotelName: "Hotel Title",
    location: "hotel location",
    starRating: 4,
    adults: 2,
    children: 1,
    infants: 0,
    departureDate: 1721948400000,
    days: 7,
    departureAirport: "Manchester",
  },
};

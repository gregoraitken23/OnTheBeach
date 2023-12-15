// Import necessary modules and functions for testing
import React from "react";
import { render, screen, fireEvent, Matcher } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// Import the component to be tested and mock data
import SortableInfoCards from "../SortableOfferCards";
import { offerCardListData } from "../../../../OfferCardList.Mocks";
import { OfferCardPropsI } from "../../../molecules/OfferCard/OfferCard";

// Define a helper function for testing different sorting options
const testSortingOption = (
  sortingTestId: Matcher,
  sortingFunction:
    | ((a: OfferCardPropsI, b: OfferCardPropsI) => number)
    | undefined
) => {
  // Render the SortableInfoCards component with mock data
  render(<SortableInfoCards data={offerCardListData} />);

  // Simulate a click on the button identified by the test ID
  fireEvent.click(screen.getByTestId(sortingTestId));

  // Calculate the expected order of hotel names based on the sorting function
  const expectedHotelNames = offerCardListData
    .slice()
    .sort(sortingFunction)
    .map((item) => item.hotelName);

  // Extract the displayed hotel names from the rendered component
  const displayedHotelNames = screen
    .getAllByTestId("hotelName")
    .map((card) => card.textContent);

  // Assert that the displayed hotel names match the expected order
  expect(displayedHotelNames).toEqual(expectedHotelNames);
};

// Describe block for the test suite
describe("SortableInfoCards", () => {
  // Test case for alphabetical sorting
  it("changes sorting option when price alphabetical SortButton is clicked", () => {
    // Use the helper function to test sorting by hotel name alphabetically
    testSortingOption(
      "sort-alphabetical",
      (a: { hotelName: string }, b: { hotelName: any }) =>
        a.hotelName.localeCompare(b.hotelName)
    );
  });

  // Test case for sorting by price
  it("changes sorting option when price SortButton is clicked", () => {
    // Use the helper function to test sorting by price
    testSortingOption(
      "sort-price",
      (a: { price: number }, b: { price: number }) => a.price - b.price
    );
  });

  // Test case for sorting by star rating
  it("changes sorting option when star rating sort button is clicked", () => {
    // Use the helper function to test sorting by star rating
    testSortingOption(
      "sort-star",
      (a: { starRating: number }, b: { starRating: number }) =>
        b.starRating - a.starRating
    );
  });
});

import React from 'react';
import { render, screen, fireEvent, Matcher } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SortableInfoCards from '../SortableOfferCards';
import { offerCardListData } from '../../../../OfferCardList.Mocks';
import { OfferCardPropsI } from '../../../molecules/OfferCard/OfferCard';

const testSortingOption = (sortingTestId: Matcher, sortingFunction: ((a: OfferCardPropsI, b: OfferCardPropsI) => number) | undefined) => {
  render(<SortableInfoCards data={offerCardListData} />);
  fireEvent.click(screen.getByTestId(sortingTestId));

  const expectedHotelNames = offerCardListData.slice().sort(sortingFunction).map(item => item.hotelName);
  const displayedHotelNames = screen.getAllByTestId('hotelName').map(card => card.textContent);

  expect(displayedHotelNames).toEqual(expectedHotelNames);
};

describe('SortableInfoCards', () => {
  it('changes sorting option when price alphabetical SortButton is clicked', () => {
    testSortingOption('sort-alphabetical', (a, b) => a.hotelName.localeCompare(b.hotelName));
  });

  it('changes sorting option when price SortButton is clicked', () => {
    testSortingOption('sort-price', (a, b) => a.price - b.price);
  });

  it('changes sorting option when star rating sort button is clicked', () => {
    testSortingOption('sort-star', (a, b) => b.starRating - a.starRating);
  });
});

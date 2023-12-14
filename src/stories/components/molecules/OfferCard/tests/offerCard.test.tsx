import React from 'react';
import { render, fireEvent, getByAltText, getByTestId, getByRole, waitFor } from '@testing-library/react';
import { OfferCard, OfferCardPropsI } from '../OfferCard';
import { offerCardListData } from '../../../../OfferCardList.Mocks';

const data = offerCardListData[0];
describe('OfferCard Component loads', () => {
  it('renders without crashing', () => {
    render(<OfferCard {...data} />);
  });
  it('displays hotel details correctly', () => {
    const { getByText } = render(<OfferCard {...data} />);
    expect(getByText(data.hotelName)).toBeInTheDocument();
    expect(getByText(data.location)).toBeInTheDocument();
    expect(getByText(data.callToAction)).toBeInTheDocument();
    // Add similar assertions for other details
  });
  it('displays the hotel image correctly', () => {
    const { getByAltText } = render(<OfferCard {...data} />);
    const image = getByAltText(data.hotelName);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', data.hotelImage);
  });

  it('displays the book button', () => {
    const { getByRole } = render(<OfferCard {...data} />);
    const button = getByRole('button', { name: /button-name/i });
    expect(button).toBeInTheDocument();
  });
});

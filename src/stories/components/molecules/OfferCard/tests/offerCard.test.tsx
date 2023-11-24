import React from "react";
import { render } from "@testing-library/react";
import { OfferCard } from "../OfferCard";
import { offerCardListData } from "../../../../OfferCardList.Mocks";

test("Does Offer Card Load?", () => {
  const item = offerCardListData[0];
  const { container } = render(
    <OfferCard
      key={item.hotelName}
      hotelName={item.hotelName}
      location={item.location}
      starRating={item.starRating}
      adults={item.adults}
      children={item.children}
      infants={item.infants}
      departureDate={item.departureDate}
      days={item.days}
      departureAirport={item.departureAirport}
      callToAction={item.callToAction}
      price={item.price}
      hotelDescription={item.hotelDescription}
      product={item.product}
      hotelImage={item.hotelImage}
    />
  );
  expect(container.childElementCount).toEqual(1);
});

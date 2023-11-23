import React from "react";
import { render } from "@testing-library/react";
import SortableOffercards from "../SortableOfferCards";
import { offerCardListData } from "../../../../OfferCardList.Mocks";

test("Does Sortable Offer Cards Load?", () => {
  const { container } = render(<SortableOffercards data={offerCardListData} />);
  expect(container.childElementCount).toEqual(1);
});

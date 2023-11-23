import React, { useState } from "react";
import {
  OfferCard,
  type OfferCardPropsI,
} from "../../molecules/OfferCard/OfferCard";
import { SortButton } from "../../atoms/SortButton/SortButton";
import "./sortableOfferCards.scss";
import { ReactComponent as Alphabetical } from "../../../assets/alphabetical.svg";
import { ReactComponent as Pound } from "../../../assets/pound.svg";
import { ReactComponent as Star } from "../../../assets/star.svg";

type Item = OfferCardPropsI;

type SortOptions = "alphabetical" | "price" | "star";
interface Props {
  data: Item[];
}

const SortableInfoCards: React.FC<Props> = ({ data }) => {
  const [sortedData, setSortedData] = useState<Item[]>(
    [...data].sort((a, b) => a.price - b.price)
  );

  const handleSort = (option: SortOptions) => {
    let sortedArray: Item[] = [];

    switch (option) {
      case "alphabetical":
        sortedArray = [...data].sort((a, b) =>
          a.hotelName.localeCompare(b.hotelName)
        );
        break;
      case "price":
        sortedArray = [...data].sort((a, b) => a.price - b.price);
        break;
      case "star":
        sortedArray = [...data].sort((a, b) => b.starRating - a.starRating);
        break;
      default:
        break;
    }
    setSortedData(sortedArray);
  };

  return (
    <div className="app-container">
      <div className="sortableInfoCards">
        <aside className="sidebar">
          <SortButton
            buttonText="sort"
            secondaryBoldText="alphabetically"
            onClick={() => {
              handleSort("alphabetical");
            }}
            icon={<Alphabetical />}
          />
          <SortButton
            buttonText="sort by"
            secondaryBoldText="price"
            onClick={() => {
              handleSort("price");
            }}
            icon={<Pound />}
          />
          <SortButton
            buttonText="sort by"
            secondaryBoldText="star rating"
            onClick={() => {
              handleSort("star");
            }}
            icon={<Star />}
          />
        </aside>
        <article className="content">
          {sortedData?.map((item: OfferCardPropsI) => {
            return (
              <OfferCard
                key={item.hotelName}
                hotelName={item.hotelName}
                location={item.location}
                starRating={item.starRating}
                adults={item.adults}
                children={item.children}
                infants={item.infants}
                departureDate={item.departureDate}
                nights={item.nights}
                departureAirport={item.departureAirport}
                callToAction={item.callToAction}
                price={item.price}
                hotelDescription={item.hotelDescription}
                product={item.product}
                hotelImage={item.hotelImage}
              />
            );
          })}
        </article>
      </div>
    </div>
  );
};

export default SortableInfoCards;

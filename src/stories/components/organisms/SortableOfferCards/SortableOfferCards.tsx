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
import { SortListE } from '../../atoms/SortButton/SortButton';

type Item = OfferCardPropsI;
interface Props {
  data: Item[];
}

const SortableInfoCards: React.FC<Props> = ({ data }) => {
  const [sortedData, setSortedData] = useState<Item[]>(
    [...data].sort((a, b) => a.price - b.price)
  );
  const [activeItem, setActiveItem] = useState<string>(SortListE.PRICE);
  
  const handleItemClick = (item: string): void => {
    setActiveItem(item);
  };

  const handleSort = (option: SortListE) => {
    let sortedArray: Item[] = [];

    switch (option) {
      case SortListE.ALPHABETICAL:
        sortedArray = [...data].sort((a, b) =>
          a.hotelName.localeCompare(b.hotelName)
        );
        break;
      case SortListE.PRICE:
        sortedArray = [...data].sort((a, b) => a.price - b.price);
        break;
      case SortListE.STAR_RATING:
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
            isClicked = {activeItem === SortListE.ALPHABETICAL}
            secondaryBoldText="alphabetically"
            onClick={() => {
              handleSort(SortListE.ALPHABETICAL);
              handleItemClick(SortListE.ALPHABETICAL);
            }}
            icon={<Alphabetical />}
          />
          <SortButton
            buttonText="sort by"
            secondaryBoldText="price"
            isClicked = {activeItem === SortListE.PRICE}
            onClick={() => {
              handleSort(SortListE.PRICE);
              handleItemClick(SortListE.PRICE);
            }}
            icon={<Pound />}
          />
          <SortButton
            buttonText="sort by"
            secondaryBoldText="star rating"
            isClicked = {activeItem === SortListE.STAR_RATING}
            onClick={() => {
              handleSort(SortListE.STAR_RATING);
              handleItemClick(SortListE.STAR_RATING);
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
                days={item.days}
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

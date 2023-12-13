import React, { useState, useMemo } from "react";
import { OfferCard, type OfferCardPropsI } from "../../molecules/OfferCard/OfferCard";
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

const SortableInfoCards = ({ data }:Props) => {
  const [activeItem, setActiveItem] = useState<SortListE>(SortListE.PRICE);

  const sortedData = useMemo(() => {
    const sortData = (data: Item[], option: SortListE) => {
      return [...data].sort((a, b) => {
        switch (option) {
          case SortListE.ALPHABETICAL:
            return a.hotelName.localeCompare(b.hotelName);
          case SortListE.PRICE:
            return a.price - b.price;
          case SortListE.STAR_RATING:
            return b.starRating - a.starRating;
          default:
            return 0;
        }
      });
    };

    return sortData(data, activeItem);
  }, [data, activeItem]);

  const handleSort = (option: SortListE) => {
    setActiveItem(option);
  };

  const sortingOptions = [
    { label: "Alphabetical", value: SortListE.ALPHABETICAL, icon: <Alphabetical /> },
    { label: "Price", value: SortListE.PRICE, icon: <Pound /> },
    { label: "Star Rating", value: SortListE.STAR_RATING, icon: <Star /> },
  ];

  return (
    <div className="app-container">
      <div className="sortableInfoCards">
        <aside className="sidebar">
          {sortingOptions.map(({ label, value, icon }) => (
            <SortButton
              key={value}
              buttonText="sort"
              isClicked={activeItem === value}
              secondaryBoldText={label.toLowerCase()}
              onClick={() => handleSort(value)}
              icon={icon}
            />
          ))}
        </aside>
        <article className="content">
          {sortedData.map((item: OfferCardPropsI) => (
            <OfferCard key={item.hotelName} {...item} />
          ))}
        </article>
      </div>
    </div>
  );
};

export default SortableInfoCards;

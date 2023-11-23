import React from "react";
import "./StarRating.scss";
import star from "../../../assets/star.svg";

interface StarRatingProps {
  rating: number; // Integer rating value
}

export const StarRating = ({ rating }: StarRatingProps) => {
  const renderStars = (): JSX.Element[] => {
    const stars: JSX.Element[] = [];
    const totalStars = 6; // Total number of stars
    // logic for adding or removing stars based on rating given
    for (let i = 1; i <= totalStars; i++) {
      if (i <= rating) {
        stars.push(
          <span key={i}>
            <img src={star} alt="starrating" className="star" />
          </span>
        );
      } else {
        stars.push(<span key={i}></span>);
      }
    }

    return stars;
  };

  return <div className="starRating">{renderStars()}</div>;
};

export default StarRating;

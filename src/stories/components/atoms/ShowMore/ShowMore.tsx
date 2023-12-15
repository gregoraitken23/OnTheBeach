import React from "react";
import "./ShowMore.scss";

interface ShowMoreButtonProps {
  /*
  text of the button
  */
  buttonText: string;
  /*
  Product type ie-flight,holiday,hotel
  */
  product: string;
  /*
  boolean for if showmore is open
  */
  isOpen: boolean;
  /*
  action for toggle
  */
  toggleContent?: () => void;
}
const ShowMoreButton = ({
  buttonText,
  toggleContent,
  product,
  isOpen,
}:ShowMoreButtonProps) => {
  const isDescriptionOpen = isOpen
    ? "showMore-button--open"
    : "showMore-button";

  return (
    <div className="showMore">
      <button onClick={toggleContent} className={isDescriptionOpen}>
        <span>
          <strong>{buttonText}</strong> about this {product}
        </span>
      </button>
    </div>
  );
};

export default ShowMoreButton;

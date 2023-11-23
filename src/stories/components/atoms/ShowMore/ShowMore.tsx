import React from "react";
import "./ShowMore.scss";

interface ShowMoreButtonProps {
  buttonText: string;
  product: string;
  isOpen: boolean;
  toggleContent?: () => void;
}
const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({
  buttonText,
  toggleContent,
  product,
  isOpen,
}) => {
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

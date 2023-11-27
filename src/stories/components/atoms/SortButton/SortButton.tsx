import React, { useState } from "react";
import "./sortButton.scss";

interface bookButtonProps {
  /**
   * Icon to display right of button
   */
  icon: React.ReactNode;
  /**
   * sort by variable name ie price, date, alphabetically
   */
  secondaryBoldText: string;
  /**
   * Button text
   */
  buttonText: string;
  /**
   * is button selected
   */
  isClicked?: boolean;
  /**
   * Optional click handler
   */
  onClick: () => void;
}
export enum SortListE {
  ALPHABETICAL = 'alphabetical',
  PRICE = 'price',
  STAR_RATING = 'star',
}
/**
 * Primary UI component for user interaction
 */
export const SortButton = ({
  icon,
  buttonText,
  onClick,
  isClicked,
  secondaryBoldText,
}: bookButtonProps) => {
  
  return (
    <div className="sortButton">
      <button
        style={{
          // if we are to make this component fully reusable we should replace these colors with props
          backgroundColor: !isClicked ? "white" : "#17317f",
          color: !isClicked ? "#17317f" : "white",
          cursor: "pointer",
          alignItems: "center",
          position: "relative",
          transition:
            "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
        }}
        onClick={onClick}
      >
        {buttonText}
        <strong> {secondaryBoldText}</strong>
        <span
          className={isClicked ? "sortButton-svg--clicked" : "sortButton-svg"}
        >
          {icon}
        </span>
      </button>
    </div>
  );
};

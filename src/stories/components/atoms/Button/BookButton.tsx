import React from "react";
import "./BookButton.scss";

interface bookButtonProps {
  /**
   * BackgroundColor of button
   */
  backgroundColor?: string;
  /**
   * Price of the package
   */
  callToAction: string;
  /**
   * Price of the package
   */
  price: number;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const BookButton = ({
  backgroundColor = "#fedc07",
  callToAction,
  price,
  ...props
}: bookButtonProps) => {
  return (
    <button
      type="button"
      className="bookButton"
      style={{ backgroundColor }}
      {...props}
    >
      <span>{callToAction}</span>£{price}
    </button>
  );
};

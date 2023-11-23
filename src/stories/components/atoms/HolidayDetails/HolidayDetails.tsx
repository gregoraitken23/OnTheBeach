import React from "react";
import "./HolidayDetails.scss";
import StarRating from "../StarRating/StarRating";

export interface holidayDetailsProps {
  /**
   * what is the name of the hotel?
   */
  hotelName: string;
  /**
   * What is the location of the hotel?
   */
  location: string;
  /**
   * what is the star rating of the hotel
   */
  starRating: number;
  /**
   * number of Adults
   */
  adults: number;
  /**
   * number of children
   */
  children: number;
  /**
   * number of infants
   */
  infants: number;
  /**
   * departing date of the holiday - Note - this should be number going forward so we can use a unix timestamp for ease of sorting by date if desired.
   */
  departureDate: number;
  /**
   * number of nights of the holiday
   */
  nights: number;
  /**
   * departure airport of the hotel
   */
  departureAirport: string;
}

/**
 * Holiday Details Section
 */
export const HolidayDetails = ({
  hotelName,
  location,
  starRating,
  adults,
  children,
  infants,
  departureDate,
  nights,
  departureAirport,
}: holidayDetailsProps) => {
  // logic to handle singular or plural passenger text
  const adultPassengerText = adults > 1 ? "Adults" : "Adult";
  const childPassengerText = children > 1 ? "children" : "child";
  const infantPassengerText = infants > 1 ? "infants" : "infant";
  // logic for converting unix timestamp to readable date
  const unixTimestampMilliseconds = departureDate;
  const dateFromUnix = new Date(unixTimestampMilliseconds);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formatter = new Intl.DateTimeFormat("en-GB", options);
  const departureDateString = formatter.format(dateFromUnix);
  const infantsExist = infants > 0;
  return (
    <div className="holidayDetails">
      <h2>{hotelName}</h2>
      <h3>{location}</h3>
      <StarRating rating={starRating} />
      <div className="hotelDetails-information">
        <p>
          <strong>{adults}</strong> {adultPassengerText},<strong> {children}</strong>{" "}
          {childPassengerText} {infantsExist && " & "}
          <strong> {infantsExist && infants}</strong>{" "}
          {infantsExist && infantPassengerText}
          <br />
          <strong>{departureDateString}</strong> for <strong>{nights}</strong> nights
          <br />
          departing from <strong>{departureAirport}</strong>
        </p>
      </div>
    </div>
  );
};

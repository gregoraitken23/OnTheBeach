import React, { useState } from "react";
import "./offerCard.scss";
import { HolidayDetails } from "../../atoms/HolidayDetails/HolidayDetails";
import { BookButton } from "../../atoms/Button/BookButton";
import ShowMoreButton from "../../atoms/ShowMore/ShowMore";

export interface OfferCardPropsI {
  /**
   * Name of the Hotel
   */
  hotelName: string;
  /**
   * Location of the Hotel
   */
  location: string;
  /**
   * Star rating for hotel
   */
  starRating: number;
  /**
   * Hotel image - note - optional as from experience hotel images can sometimes not load as desired
   */
  hotelImage?: string;
  /**
   * number of adults
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
   * departing date of the holiday
   */
  departureDate: number;
  /**
   * number of days of the holiday
   */
  days: number;
  /**
   * departure airport
   */
  departureAirport: string;
  /**
   * call to action - label on button
   */
  callToAction: string;
  /**
   * Price of package - do not need £
   */
  price: number;
  /**
   * Description of the Hotel
   */
  hotelDescription: string;
  /**
   * type of product ie, flight - hotel - package
   */
  product: string;
}

/**
 * OfferCard Molecule
 */
export const OfferCard = ({
  hotelName,
  location,
  starRating,
  hotelImage,
  adults,
  children,
  infants,
  departureDate,
  departureAirport,
  days,
  price,
  callToAction,
  hotelDescription,
  product,
}: OfferCardPropsI) => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const toggleContent = (): void => {
    setShowMore(!showMore);
  };
  const buttonText = showMore ? "Read less" : "Read more";

  return (
    <>
      <div className="offerCardContainer">
        <div className="offerCard">
          <div className="offerCard-hotelImage">
            <img src={hotelImage} alt={hotelName}></img>
            <ShowMoreButton
              buttonText={buttonText}
              toggleContent={toggleContent}
              product={product}
              isOpen={showMore}
            />
          </div>
          <div className="offerCard-hotelInfo">
            <HolidayDetails
              hotelName={hotelName}
              location={location}
              starRating={starRating}
              adults={adults}
              children={children}
              infants={infants}
              departureDate={departureDate}
              days={days}
              departureAirport={departureAirport}
            />
            <BookButton price={price} callToAction={callToAction} />
          </div>
        </div>
        {showMore && (
          <div className="hotelDescription">
            <h3>Overview</h3>
            <p>{hotelDescription}</p>
          </div>
        )}
      </div>
    </>
  );
};

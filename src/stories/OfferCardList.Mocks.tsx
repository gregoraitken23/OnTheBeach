import { type OfferCardPropsI } from "./components/molecules/OfferCard/OfferCard";
import hotelImage1 from "../../src/stories/assets/hotelImages/hotel-image-1.png";
import hotelImage2 from "../../src/stories/assets/hotelImages/hotel-image-2.png";
import hotelImage3 from "../../src/stories/assets/hotelImages/hotel-image-3.png";

export const offerCardListData: OfferCardPropsI[] = [
  {
    hotelName: "Iberostar Grand Salome",
    location: "Cost Adeje, Tenerife",
    starRating: 5,
    hotelImage: hotelImage1,
    adults: 2,
    children: 4,
    departureAirport: "Manchester",
    departureDate: 2721948400000,
    days: 7,
    infants: 2,
    price: 1136.50,
    callToAction: "Book now",
    hotelDescription:
      "Located on the coast of Tenerife, between Playa del Duque and Playa de Fanabe, this hotel offers gourmet dining, exclusive lavish spas, magnificent suites with spectacular views and a personal butler or concierge service to meet all of your needs.",
    product: "hotel",
  },
  {
    hotelName: "Aguamarina Golf Hotel",
    location: "Cost Adeje, Tenerife",
    starRating: 4,
    hotelImage: hotelImage2,
    adults: 2,
    children: 4,
    departureAirport: "Manchester",
    departureDate: 1421948500000,
    days: 8,
    infants: 0,
    price: 696.80,
    callToAction: "Book now",
    hotelDescription:
      "The Hotel Aguamarina Golf has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.",
    product: "hotel",
  },
  {
    hotelName: "Las Piramides Resort",
    location: "Cost Adeje, Tenerife",
    starRating: 3,
    hotelImage: hotelImage3,
    adults: 2,
    infants: 0,
    children: 1,
    departureAirport: "Manchester",
    departureDate: 1751948800000,
    days: 8,
    price: 499.99,
    callToAction: "Book now",
    hotelDescription:
      "The Hotel Aguamarina Golf has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.",
    product: "hotel",
  },
];

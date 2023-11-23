import { type OfferCardPropsI } from './components/molecules/OfferCard/OfferCard'
import hotelImage1 from '../../src/stories/assets/hotelImages/hotel-image-1.png'

export const offerCardListData: OfferCardPropsI[] = [
  {
    hotelName: 'Aguamarina Golf Hotel',
    location: 'Cost Adeje, Tenerife',
    starRating: 3,
    hotelImage: hotelImage1,
    adults: 2,
    children: 4,
    departureAirport: 'Manchester',
    departureDate: 2721948400000,
    nights: 8,
    infants: 2,
    price: 2200,
    callToAction: 'Book now',
    hotelDescription: 'The Hotel Aguamarina Golf has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.',
    product: 'hotel'
  },
  {
    hotelName: 'Aguamarina Golf Hotel 2',
    location: 'Cost Adeje, Tenerife',
    starRating: 5,
    hotelImage: hotelImage1,
    adults: 2,
    children: 4,
    departureAirport: 'Manchester',
    departureDate: 1421948500000,
    nights: 8,
    infants: 0,
    price: 750,
    callToAction: 'Book now',
    hotelDescription: 'The Hotel Aguamarina Golf has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.',
    product: 'hotel'
  },
  {
    hotelName: 'Aguamarina Golf Hotel 3',
    location: 'Cost Adeje, Tenerife',
    starRating: 1,
    hotelImage: hotelImage1,
    adults: 2,
    infants: 0,
    children: 4,
    departureAirport: 'Manchester',
    departureDate: 1751948800000,
    nights: 8,
    price: 2220,
    callToAction: 'Book now',
    hotelDescription: 'The Hotel Aguamarina Golf has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.',
    product: 'hotel'
  }
]


export enum Page {
  Home = 'Home',
  Cars = 'Cars',
  About = 'About',
  Contact = 'Contact',
  CarDetails = 'CarDetails',
  Booking = 'Booking',
}

export type Locale = 'en' | 'fr' | 'ar';

export type MultilingualString = {
  [key in Locale]: string;
};

export interface Car {
  id: number;
  name: MultilingualString;
  type: MultilingualString;
  pricePerDay: number;
  seats: number;
  transmission: MultilingualString;
  fuel: MultilingualString;
  images: string[];
  description: MultilingualString;
  features: MultilingualString[];
}

export interface NavLink {
    nameKey: string;
    page: Page;
}

export interface Testimonial {
    name: string;
    location: string;
    quote: MultilingualString;
    avatar: string;
}
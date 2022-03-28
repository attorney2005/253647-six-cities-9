export type Location = {
  latitude: number,
  longitude: number,
  zoom: number
}

export type City = {
  name: string,
  location: Location
}

export type User = {
  id: number,
  avatarImage: string,
  name: string,
  isPro: boolean,
  avatarUrl:string
};

export enum HouseType {
  Apartment = 'Apartment',
  PrivateRoom = 'Private room',
  House = 'House',
  Hotel = 'Hotel'
}

export type Offer = {
  id: number,
  previewImage: string,
  isPremium: boolean,
  price: number,
  title: string,
  type: HouseType,
  isFavorite: boolean,
  rating: number,
  images: string[],
  description: string,
  bedrooms: number,
  maxAdults: number,
  goods: string[],
  host: User,
  city: City,
  location: Location
};

export type Offers = Offer[];

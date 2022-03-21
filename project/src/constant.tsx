import {City} from './types/offer';

export const HOTELS_COUNT = 5;

export const HOTELS_ARRAY: number[] = Array(HOTELS_COUNT).fill(undefined).map((e, i) => i + 1);

export enum AppRoute {
  Main = '/',
  Sign_In = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  Not_Found = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const MAX_RATING = 5;

export const getRatingPercent = (rating: number): number =>
  Math.round(rating) / MAX_RATING * 100;

export const URL_PIN_DEFAULT = 'img/pin.svg';
export const URL_PIN_CURRENT = 'img/pin-active.svg';

export const PIN_WIDTH = 42;
export const PIN_HEIGHT = 68;

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const TIMEOUT_SHOW_ERROR = 2000;

export enum SortType {
  Default = 'Popular',
  PriceAsc = 'Price: low to high',
  PriceDesc = 'Price: high to low',
  RatingDesc = 'Top rated first',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
}

export const CITIES: City[] = [
  {
    'location': {
      'latitude': 50.870216,
      'longitude': 3.395168,
      'zoom': 13,
    },
    'name': 'Paris',
  },
  {
    'location': {
      'latitude': 51.370216,
      'longitude': 3.895168,
      'zoom': 13,
    },
    'name': 'Cologne',
  },
  {
    'location': {
      'latitude': 51.870216,
      'longitude': 4.395168,
      'zoom': 13,
    },
    'name': 'Brussels',
  },
  {
    'location': {
      'latitude': 52.370216,
      'longitude': 4.895168,
      'zoom': 13,
    },
    'name': 'Amsterdam',
  },
  {
    'location': {
      'latitude': 52.870216,
      'longitude': 5.395168,
      'zoom': 13,
    },
    'name': 'Hamburg',
  },
  {
    'location': {
      'latitude': 53.370216,
      'longitude': 5.895168,
      'zoom': 13,
    },
    'name': 'Dusseldorf',
  },
];

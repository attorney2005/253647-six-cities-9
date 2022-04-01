import { AuthorizationStatus, SortType } from '../constant';
import { store } from '../store';
import { Reviews } from './review';
import {
  City,
  Offer,
  Offers
} from './offer.js';

export type Data = {
  city: City,
  offers: Offers,
  currentOffer: Offer | null,
  cityOffers: Offers,
  nearOffers: Offers | null,
  currentOfferComments: Reviews | null,
  sortType: SortType,
  isDataLoaded: boolean,
  error: string,
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

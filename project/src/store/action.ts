import {createAction} from '@reduxjs/toolkit';
import {City, Offers, Offer} from '../types/offer';
import {SortType} from '../constant';
import {AppRoute, AuthorizationStatus} from '../constant';
import {Reviews} from '../types/review';

export const changeCity = createAction<City>('main/changeCity');
export const changeSortType = createAction<SortType>('main/changeSortType');
export const loadOffers = createAction<Offers>('data/loadOffers');
export const loadOffer = createAction<Offer | null>('data/loadOffer');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
export const setError = createAction<string>('app/setError');
export const loadNearOffers = createAction<Offers | null>('data/loadNearOffers');
export const loadComments = createAction<Reviews | null>('data/loadComments');


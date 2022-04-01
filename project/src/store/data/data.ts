import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, SortType, CITIES} from '../../constant';
import {Data} from '../../types/state';
import {City, Offers} from '../../types/offer';
// import {changeCity, changeSortType, loadComments, loadNearOffers, loadOffer, loadOffers, setError} from "../action";

const DEFAULT_CITY = CITIES.filter((city) => city.name === 'Paris')[0];
const DEFAULT_SORT_TYPE = SortType.Default;
const getCurrentCityOffers = (city: City, offers: Offers): Offers => offers.filter((offer) => offer.city.name === city.name);


const initialState: Data = {
  city: DEFAULT_CITY,
  offers: [],
  cityOffers: [],
  currentOffer: null,
  nearOffers: [],
  currentOfferComments: [],
  sortType: DEFAULT_SORT_TYPE,
  isDataLoaded: false,
  error: '',
};

export const data = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload;
      state.cityOffers = getCurrentCityOffers(action.payload, state.offers);
      state.sortType = DEFAULT_SORT_TYPE;
    },
    changeSortType: (state, action) => {
      state.sortType = action.payload;
    },
    loadOffers: (state, action) => {
      state.offers = action.payload;
      state.cityOffers = getCurrentCityOffers(state.city, action.payload);
      state.isDataLoaded = true;
    },
    loadOffer: (state, action) => {
      state.currentOffer = action.payload;
    },
    loadNearOffers: (state, action) => {
      state.nearOffers = action.payload;
    },
    loadComments: (state, action) => {
      state.currentOfferComments = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});
export const { changeCity, changeSortType, loadOffers, loadOffer,  loadNearOffers, loadComments, setError} = data.actions;
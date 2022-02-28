import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import {HOTELS_COUNT} from "./constant";

const Setting = {
  HOTELS_COUNT: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      hotelsCount={Setting.HOTELS_COUNT}
      offers={offers}
      reviews={reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'));

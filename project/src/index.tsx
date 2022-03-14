import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';
import {CITY} from './mocks/city';
import {Provider} from 'react-redux';
import {store} from './store';

const Setting = {
  HOTELS_COUNT: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        hotelsCount={Setting.HOTELS_COUNT}
        offers={offers}
        reviews={reviews}
        city={CITY}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

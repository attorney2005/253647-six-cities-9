import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  HOTELS_COUNT: 50,
};

ReactDOM.render(
  <React.StrictMode>
    <App hotelsCount={Setting.HOTELS_COUNT}/>
  </React.StrictMode>,
  document.getElementById('root'));

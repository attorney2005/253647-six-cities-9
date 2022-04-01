import {useState} from 'react';
import OfferCards from '../offer-cards/offer-cards';
import {Offer} from '../../types/offer';
import Map from '../map/map';
import MainCityList from '../main-city-list/main-city-list';
import MainSorting from '../main-sorting/main-sorting';
import {useAppSelector} from '../../hooks';
import {getSortedOffersList} from '../../constant';


function MainScreen(): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Offer | null>(null);
  const {city, cityOffers, sortType} = useAppSelector(({DATA}) => DATA);
  const onListItemMouseEnter = (offer: Offer) => {
    setActiveOffer(offer);
  };
  const onListItemMouseLeave = () => {
    setActiveOffer(null);
  };

  return (
    <>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path>
          </symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18">
            <path
              d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"
            >
            </path>
          </symbol>
          <symbol id="icon-star" viewBox="0 0 13 12">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"
            >
            </path>
          </symbol>
        </svg>
      </div>
      <div className="page page--gray page--main">
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <MainCityList/>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{cityOffers.length} places to stay in {city.name}</b>
                <MainSorting/>
                <OfferCards
                  offers={getSortedOffersList(sortType, cityOffers.filter((offer) => offer.city.name === city.name))}
                  onListItemMouseEnter={onListItemMouseEnter}
                  onListItemMouseLeave={onListItemMouseLeave}
                />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    city={city}
                    offers={cityOffers}
                    activeOffer={activeOffer}
                  />
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default MainScreen;

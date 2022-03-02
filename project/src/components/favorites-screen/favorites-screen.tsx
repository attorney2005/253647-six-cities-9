import { Offer } from '../../types/offer';
import CityRentalOffers from '../city-offers/city-offers';

type FavoritesScreenProps = {
  offers: Offer[]
};

type GroupedOffers = {
  [key: string]: Offer[]
}

function FavoritesScreen({offers}: FavoritesScreenProps) {
  const groupedOffers: GroupedOffers = {};
  offers.forEach((offer) => {
    const cityName = offer.city.name;
    if (groupedOffers[cityName] === undefined) {
      groupedOffers[cityName] = [];
    }

    groupedOffers[cityName].push(offer);
  });

  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                Object.keys(groupedOffers).map((cityName) =>
                  (
                    <CityRentalOffers
                      cityName={cityName}
                      offers={groupedOffers[cityName]}
                      key={cityName}
                    />
                  ))
              }
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

export default FavoritesScreen;

import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OfferCardsProps = {
  offers: Offer[],
};

function OfferCards({offers}: OfferCardsProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
          />
        ))
      }
    </div>
  );
}

export default OfferCards;

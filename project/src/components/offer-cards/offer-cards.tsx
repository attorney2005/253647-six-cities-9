import {Offer, Offers} from '../../types/offer';
import OfferCard from '../offer-card/offer-card';
import {memo} from 'react';

type OfferCardsProps = {
  offers: Offers,
  onListItemMouseEnter(offer: Offer): void;
  onListItemMouseLeave(): void;
};

function OfferCards({offers, onListItemMouseEnter, onListItemMouseLeave}: OfferCardsProps) {
  const onMouseEnterHandler = (offer: Offer) => {
    onListItemMouseEnter(offer);
  };

  const onMouseLeaveHandler = () => {
    onListItemMouseLeave();
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            onMouseEnterHandler={onMouseEnterHandler}
            onMouseLeaveHandler={onMouseLeaveHandler}
          />
        ))
      }
    </div>
  );
}

export default memo(OfferCards);

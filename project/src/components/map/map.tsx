import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import {City, Offer, Offers} from '../../types/offer';

type MapProps = {
  city: City;
  offers: Offers;
  activeOffer: Offer | null;
}

function Map({city, offers, activeOffer}: MapProps) {
  const mapRef = useMap(city, offers, activeOffer);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;

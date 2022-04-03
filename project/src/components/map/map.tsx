import {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import {City, Offer, Offers} from '../../types/offer';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../constant';

type MapProps = {
  city: City;
  offers: Offers;
  activeOffer: Offer | null;
}

function Map({city, offers, activeOffer}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  console.log(activeOffer);
  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  useEffect(() => {
    if (!map) {
      return
    }
    const markers: leaflet.Marker[] = [];

    offers.forEach((offer) => {
      const marker = leaflet
        .marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        }, {
          icon: (activeOffer && offer.location.latitude === activeOffer.location.latitude && offer.location.longitude === activeOffer.location.longitude)
            ? currentCustomIcon
            : defaultCustomIcon,
        });
      marker.addTo(map);
      markers.push(marker);
    });

    return () => markers.forEach((marker) => {
      marker.removeFrom(map);
    });

  }, [map, offers, activeOffer]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;

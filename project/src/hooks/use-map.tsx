import {useEffect, useRef, useState} from 'react';
import leaflet, {Map} from 'leaflet';
import {City, Offer, Offers} from '../types/offer';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../constant';

const defaultIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const selectedOfferIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function useMap(city: City, offers: Offers, activeOffer: Offer | null) {
  const ref = useRef(null);
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (!map && ref.current) {
      const leafletMap = leaflet.map(ref.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      leaflet.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      }).addTo(leafletMap);

      setMap(leafletMap);
    }
  }, [ref]);

  useEffect(() => {
    if (map) {
      map.flyTo({
        lat: city.location.latitude,
        lng: city.location.longitude,
      }, city.location.zoom, {duration: 0.9});
    }
  }, [city]);

  useEffect(() => {
    if (map) {
      map.eachLayer((layer) => {
        if (layer instanceof leaflet.Marker) {
          layer.removeFrom(map);
        }
      });
      offers.forEach((offer) => {
        const marker = leaflet.marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        }, {
          icon: defaultIcon,
        });
        marker.addTo(map);
      });
    }
  }, [offers, map]);

  useEffect(() => {
    if (map && activeOffer) {
      const activeOfferLocation = leaflet.latLng([
        activeOffer.location.latitude,
        activeOffer.location.longitude,
      ]);
      map.eachLayer((layer) => {
        if (layer instanceof leaflet.Marker) {
          if (layer.getLatLng().equals(activeOfferLocation)) {
            layer.setIcon(selectedOfferIcon);
          } else {
            layer.setIcon(defaultIcon);
          }
        }
      });
    }
  }, [activeOffer]);

  return ref;
}

export default useMap;

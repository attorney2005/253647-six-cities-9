import {HouseType, Offer} from '../types/offer';

export const offers: Offer[] = [
  {
    id: 1,
    previewImage: 'img/apartment-01.jpg',
    isPremium: true,
    price: 120,
    header: 'Beautiful & luxurious apartment at great location',
    houseType: HouseType.Apartment,
    isFavorite: false,
    rating: 4,
    images: [
      'img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg',
      'img/apartment-03.jpg', 'img/studio-01.jpg',
    ],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedroomsCount: 3,
    guestsCount: 4,
    householdItems: [
      'Wi-Fi', 'Heating', 'Kitchen', 'Fridge',
    ],
    owner: {
      id: 1,
      avatarImage: 'img/avatar-angelina.jpg',
      isPro: true,
      name: 'Angelina',
    },
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 1,
        longitude: 1,
        zoom: 16,
      },
    },
    location: {
      latitude: 1,
      longitude: 1,
      zoom: 16,
    },
  },
  {
    id: 2,
    previewImage: 'img/room.jpg',
    isPremium: false,
    price: 80,
    header: 'Wood and stone place',
    houseType: HouseType.PrivateRoom,
    isFavorite: true,
    rating: 2,
    images: [],
    description: 'Good place',
    bedroomsCount: 2,
    guestsCount: 2,
    householdItems: [
      'Kitchen', 'Fridge',
    ],
    owner: {
      id: 2,
      avatarImage: 'img/avatar-max.jpg',
      isPro: false,
      name: 'Max',
    },
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 1,
        longitude: 1,
        zoom: 16,
      },
    },
    location: {
      latitude: 1,
      longitude: 1,
      zoom: 16,
    },
  },
  {
    id: 3,
    previewImage: 'img/apartment-02.jpg',
    isPremium: false,
    price: 132,
    header: 'Canal View Prinsengracht',
    houseType: HouseType.Apartment,
    isFavorite: false,
    rating: 4,
    images: ['img/apartment-03.jpg', 'img/studio-01.jpg'],
    description: 'Best place',
    bedroomsCount: 5,
    guestsCount: 20,
    householdItems: [
      'Wi-Fi', 'Heating', 'Kitchen', 'Fridge',
    ],
    owner: {
      id: 1,
      avatarImage: 'img/avatar-angelina.jpg',
      isPro: true,
      name: 'Angelina',
    },
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 1,
        longitude: 1,
        zoom: 16,
      },
    },
    location: {
      latitude: 1,
      longitude: 1,
      zoom: 16,
    },
  },
  {
    id: 4,
    previewImage: 'img/apartment-03.jpg',
    isPremium: true,
    price: 180,
    header: 'Nice, cozy, warm big bed apartment',
    houseType: HouseType.Apartment,
    isFavorite: false,
    rating: 5,
    images: ['img/studio-01.jpg'],
    description: 'Good apartment',
    bedroomsCount: 1,
    guestsCount: 2,
    householdItems: [
      'Kitchen', 'Fridge',
    ],
    owner: {
      id: 2,
      avatarImage: 'img/avatar-max.jpg',
      isPro: false,
      name: 'Max',
    },
    city: {
      name: 'Paris',
      location: {
        latitude: 2,
        longitude: 2,
        zoom: 10,
      },
    },
    location: {
      latitude: 2,
      longitude: 2,
      zoom: 10,
    },
  },
];

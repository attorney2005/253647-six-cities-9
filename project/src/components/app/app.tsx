import {Route, BrowserRouter, Routes} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import Layout from '../layout/layout';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFound from '../not-found/not-found';
import {AppRoute, AuthorizationStatus} from '../../constant';
import PrivateRoute from '../private-route/private-route';
import {Offer} from '../../types/offer';
import {Review} from '../../types/review';

type AppProps = {
  hotelsCount: number,
  offers: Offer[],
  reviews: Review[]
};

function App({hotelsCount, offers, reviews}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Layout/>}
        >
          <Route
            path={AppRoute.Main}
            element={<MainScreen hotelsCount={hotelsCount}
              offers={offers}
            />}
          />
          <Route
            path={AppRoute.Sign_In}
            element={<LoginScreen/>}
          />
          <Route
            path={AppRoute.Room}
            element={<RoomScreen reviews={reviews}/>}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <FavoritesScreen
                  offers={offers}
                />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Not_Found}
            element={<NotFound/>}
          />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;

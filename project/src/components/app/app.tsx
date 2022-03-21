import {Route, BrowserRouter, Routes} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import Layout from '../layout/layout';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFound from '../not-found/not-found';
import {AppRoute} from '../../constant';
import PrivateRoute from '../private-route/private-route';
import {Review} from '../../types/review';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';

type AppProps = {
  reviews: Review[],
};

function App({reviews}: AppProps): JSX.Element {
  const {authorizationStatus, isDataLoaded, offers} = useAppSelector((state) => state);

  if (!isDataLoaded) {
    return (
      <LoadingScreen/>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Layout/>}
        >
          <Route
            path={AppRoute.Main}
            element={<MainScreen/>}
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
              <PrivateRoute  authorizationStatus={authorizationStatus}>
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

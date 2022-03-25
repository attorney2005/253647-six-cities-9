import {Route, Routes, Navigate} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import Layout from '../layout/layout';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFound from '../not-found/not-found';
import {AppRoute, AuthorizationStatus} from '../../constant';
import PrivateRoute from '../private-route/private-route';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

function App(): JSX.Element {
  const {authorizationStatus, isDataLoaded, offers} = useAppSelector((state) => state);

  if (!isDataLoaded) {
    return (
      <LoadingScreen/>
    );
  }
  return (
    <HistoryRouter history={browserHistory}>
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
            element={
              (authorizationStatus === AuthorizationStatus.Auth)
                ? <Navigate to={AppRoute.Main}/>
                : <LoginScreen/>
            }
          />
          <Route
            path={AppRoute.Room}
            element={<RoomScreen offers={offers}/>}
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
    </HistoryRouter>
  );
}

export default App;

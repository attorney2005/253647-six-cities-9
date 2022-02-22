import {Route, BrowserRouter, Routes} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import Layout from '../layout/layout';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFound from '../not-found/not-found';
import {HOSTEL_COUNT, AppRoute, AuthorizationStatus} from '../../constant';
import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {
  // @ts-ignore
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Layout/>}
        >
          <Route
            path={AppRoute.Main}
            element={<MainScreen offersCount={HOSTEL_COUNT}/>}
          />
          <Route
            path={AppRoute.Sign_In}
            element={<LoginScreen/>}
          />
          <Route
            path={AppRoute.Room}
            element={<RoomScreen/>}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <FavoritesScreen/>
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

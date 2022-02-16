import MainPage from '../main-page/main-page';

type AppScreenProps = {
  hotelsCount: number;
};

function App({hotelsCount}: AppScreenProps): JSX.Element {
  return (
    <MainPage hotelsCount={hotelsCount}/>
  );
}

export default App;

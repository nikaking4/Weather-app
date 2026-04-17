import { getWeatherIcon } from './utils/WeatherIcons';
import Grid from './components/Grid';
import { dummyWeather } from './testdata';

function App() {
  return (
    <div className="app">
      <h1>Weather app</h1>
      <img src={getWeatherIcon(0, true)} alt="test" width="100" />
      <Grid current={dummyWeather.current} />
    </div>
  );
}

export default App;
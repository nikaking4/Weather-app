import { useState, useEffect } from 'react';
import { getWeatherIcon } from './utils/WeatherIcons';
import Grid from './components/Grid';
import { dummyWeather } from './testdata';

function App() {
  const [weather, setWeather] = useState(null);

useEffect(() => {
  fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,wind_speed_10m,weather_code,is_day&timezone=auto')
    .then(res => res.json())
    .then(data => {
  const transformed = {
    location: 'Berlin, Germany',
    current: {
      temp: data.current.temperature_2m,
      feelsLike: data.current.apparent_temperature,
      humidity: data.current.relative_humidity_2m,
      windSpeed: data.current.wind_speed_10m,
      precipitation: data.current.precipitation,
      weatherCode: data.current.weather_code,
      isDay: data.current.is_day === 1,
    },
  };
  console.log('Transformed:', transformed);
    setWeather(transformed);
  });
}, []);

if (!weather) {
  return <div className="app"><p>Loading...</p></div>;
  }
  return (
    <div className="app">
      <h1>Weather app</h1>

<section className="current-temp">
  {weather.location}
  <p>Today</p>
  <p>Temperature: {weather.current.feelsLike}°</p>
</section>


      <img src={getWeatherIcon(0, true)} alt="test" width="100" />
      <Grid current={weather.current} />
    </div>
  );
}

export default App;
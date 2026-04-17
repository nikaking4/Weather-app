import clearDay from '../assets/clear-day.svg';
import clearNight from '../assets/clear-night.svg';
import mostlyClearDay from '../assets/mostly-clear-day.svg';
import mostlyClearNight from '../assets/mostly-clear-night.svg';
import cloudy from '../assets/cloudy.svg';
import fog from '../assets/fog.svg';
import rain from '../assets/rain.svg';
import snow from '../assets/snow.svg';
import thunderstorms from '../assets/thunderstorms.svg';

export function getWeatherIcon(code, isDay = true) {
  // Clear sky (WMO 0)
  if (code === 0) return isDay ? clearDay : clearNight;

  // Mainly clear / partly cloudy (WMO 1, 2)
  if (code === 1 || code === 2) return isDay ? mostlyClearDay : mostlyClearNight;

  // Overcast (WMO 3)
  if (code === 3) return cloudy;

  // Fog (WMO 45, 48)
  if (code === 45 || code === 48) return fog;

  // Drizzle, rain, showers (WMO 51-67, 80-82)
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return rain;

  // Snow (WMO 71-77, 85-86)
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return snow;

  // Thunderstorm (WMO 95-99)
  if (code >= 95) return thunderstorms;

  // Fallback for anything unexpected
  return cloudy;
}

export function getWeatherLabel(code) {
  if (code === 0) return 'Clear';
  if (code === 1) return 'Mainly clear';
  if (code === 2) return 'Partly cloudy';
  if (code === 3) return 'Overcast';
  if (code === 45 || code === 48) return 'Fog';
  if (code >= 51 && code <= 57) return 'Drizzle';
  if (code >= 61 && code <= 67) return 'Rain';
  if (code >= 71 && code <= 77) return 'Snow';
  if (code >= 80 && code <= 82) return 'Rain showers';
  if (code === 85 || code === 86) return 'Snow showers';
  if (code >= 95) return 'Thunderstorm';
  return 'Unknown';
}
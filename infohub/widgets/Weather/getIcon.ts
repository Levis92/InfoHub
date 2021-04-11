import icons from './icons';
const basePath = '/images/weather-icons/'

/**
 * 0: Unknown
 * 1000: Clear
 * 1001: Cloudy
 * 1100: Mostly Clear
 * 1101: Partly Cloudy
 * 1102: Mostly Cloudy
 * 2000: Fog
 * 2100: Light Fog
 * 3000: Light Wind
 * 3001: Wind
 * 3002: Strong Wind
 * 4000: Drizzle
 * 4001: Rain
 * 4200: Light Rain
 * 4201: Heavy Rain
 * 5000: Snow
 * 5001: Flurries
 * 5100: Light Snow
 * 5101: Heavy Snow
 * 6000: Freezing Drizzle
 * 6001: Freezing Rain
 * 6200: Light Freezing Rain
 * 6201: Heavy Freezing Rain
 * 7000: Ice Pellets
 * 7101: Heavy Ice Pellets
 * 7102: Light Ice Pellets
 * 8000: Thunderstorm
 */
export function getWeatherIconPath(weatherCode: number, isDay = true) {
  switch (weatherCode) {
    case 0: // Unknown
      return basePath + (isDay ? icons.partlyCloudyDay : icons.partlyCloudyNight);
    case 1000: // Clear
      return basePath + (isDay ? icons.clearDay : icons.clearNight);
    case 1001: // Cloudy
      return basePath + icons.cloudy;
    case 1100: // Mostly Clear
    case 1101: // Partly Cloudy
      return basePath + (isDay ? icons.partlyCloudyDay : icons.partlyCloudyNight);
    case 1102: // Mostly Cloudy
      return basePath + icons.cloudy;
    case 2000: // Fog
    case 2100: // Light Fog
      return basePath + icons.fog;
    case 3000: // Light Wind
    case 3001: // Wind
    case 3002: // Strong Wind
      return basePath + icons.wind;
    case 4000: // Drizzle
    case 4001: // Rain
    case 4200: // Light Rain
    case 4201: // Heavy Rain
      return basePath + icons.rain;
    case 5000: // Snow
      return basePath + icons.snow;
    case 5001: // Flurries
      return basePath + icons.wind;
    case 5100: // Light Snow
    case 5101: // Heavy Snow
      return basePath + icons.snow;
    case 6000: // Freezing Drizzle
    case 6001: // Freezing Rain
    case 6200: // Light Freezing Rain
    case 6201: // Heavy Freezing Rain
      return basePath + icons.rain;
    case 7000: // Ice Pellets
    case 7101: // Heavy Ice Pellets
    case 7102: // Light Ice Pellets
      return basePath + icons.hail;
    case 8000: // Thunderstorm
      return basePath + icons.thunderstorm;
    default:
      return basePath + (isDay ? icons.clearDay : icons.clearNight);
  }
}

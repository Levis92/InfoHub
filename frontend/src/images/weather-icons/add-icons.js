import icons from '../../images/weather-icons/icons';

export default function addIcon(icon) {
  switch (icon) {
    case 'clear-day':
      return icons.clearDay;
    case 'clear-night':
      return icons.clearNight;
    case 'cloudy':
      return icons.cloudy;
    case 'fog':
      return icons.fog;
    case 'hail':
      return icons.hail;
    case 'partly-cloudy-day':
      return icons.partlyCloudyDay;
    case 'partly-cloudy-night':
      return icons.partlyCloudyNight;
    case 'rain':
      return icons.rain;
    case 'sleet':
      return icons.sleet;
    case 'snow':
      return icons.snow;
    case 'thunderstorm':
      return icons.thunderstorm;
    case 'tornado':
      return icons.tornado;
    case 'wind':
      return icons.wind;
    default:
      return 'http://icons.iconarchive.com/icons/martz90/circle/72/weather-icon.png';
  }
}

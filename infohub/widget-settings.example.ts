export interface BusStop {
  name: string;
  id: number;
}

export interface WeatherLocation {
  /** Name of the city/location */
  name: string;
  /** Coordinates in the format [latitude],[longitude] */
  coordinates: string;
  /** Timezone in standard IANA timezone format */
  timezone: string;
}

/*
* # Västtrafik #
* List of bus-, tram- or trainstops you want to include in this widget.
*/
export const stops: readonly BusStop[] = [
  {
    name: 'Mossen',
    id: 9021014004830000
  },
  {
    name: 'Pilbågsgatan',
    id: 9021014005280000
  }
] as const;

/*
* # Weather #
* Settings for the location you want to get weather data.
*/
export const weatherLocation =
  {
    name: 'Göteborg',
    coordinates: '57.696994,11.9865'
  } as const;

/*
* # Twitter #
* The Twitter account you want to display pictures from.
*/
export const twitterUser = 'LuvKittensDaily' as const;

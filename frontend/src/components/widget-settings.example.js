/*
* # Västtrafik #
* List of bus-, tram- or trainstops you want to include in this widget.
* Attributes:
*   name: the name of the stop
*   id: the id of the stop
*/
export const stops = [
  {
    name: 'Mossen',
    id: 9021014004830000
  },
  {
    name: 'Pilbågsgatan',
    id: 9021014005280000
  }
];

/*
* # Weather #
* Data about the location you want to get weather data about.
* Attributes:
*   name: the name of the city/location
*   coordinates: the coordinates in the format [latitude],[longitude]
*/
export const weatherLocation =
  {
    name: 'Göteborg',
    coordinates: '57.696994,11.9865'
  };

/*
* # Twitter #
* The Twitter account you want to display pictures from.
*/
export const twitterUser = 'EmrgencyKittens';

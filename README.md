![Screenshot](screenshot.png)

# InfoHub &middot; [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Levis92/InfoHub/blob/master/LICENCE)

This project is made for my personal use, but you're welcome to use any part of the code. Some widgets may need [API keys](https://en.wikipedia.org/wiki/Application_programming_interface_key) and it's up to you to acquire those yourself.

## Application

InfoHub is an application to display widgets on a screen. That's it. No accounts or special features for touchscreen monitors. Just for displaying information.

It fetches background wallpapers from [Unsplash API](https://unsplash.com/developers).

### Current widgets

- **Clock with time and date.** Displays the current time and date.

- **Västtrafik.** Displays the current departures from chosen bus-, tram- or trainstops. Needs API keys. You can get them from [developer.vasttrafik.se](https://developer.vasttrafik.se/portal/#/).

- **Twitter images.** Displays the latest images from specified Twitter user.

- **Weather (Dark Sky API).** Displays current and hourly weather data for chosen location. Needs API key. You can get it from [darksky.net/dev](https://darksky.net/dev/).

## Docker

The application can, after fixing the configuration files, be composed with [Docker](https://www.docker.com).

To build it run:

```shell
$ docker-compose up --build
```

To just compose it, after being built, run:

```shell
$ docker-compose up
```

## React

The frontend is built with the Javascript library [React](https://facebook.github.io/react/) and is styled with the CSS extension language [Sass](http://sass-lang.com).

### Development

First you need to add a copy of `widget-settings.example.js` and rename it to `widget-settings.js`. The file can be found in `infohub/src/components/`. Add your own settings in the file.

The first time you run the application (and every time you add new dependencies) you need do run:

```shell
$ yarn
```

After that you only need to run:

```shell
$ yarn start
```

#### Sass

Sass files are automatically compiled during runtime or when building the application.

### Production

To build the React application you run:

```shell
$ yarn build
```

## Flask

The backend runs on the Python framework [Flask](http://flask.pocoo.org) and is used as an [API](https://en.wikipedia.org/wiki/Application_programming_interface) to request data and structure it in a format more convenient for the frontend application.

### Development

First you need to add a copy of `api_keys.example.py` and rename it to `api_keys.py`. The file can be found in `flask-app/InfoHubAPI/`. Add your API keys in this file.

The first time you run the application (and every time you add new dependencies) you need do run:

```shell
$ sh ./init.sh
```

After that you only need to run:

```shell
$ sh ./debug.sh
```

### Production

There are currently no specified script for production mode.

## Dependencies

- [React](https://facebook.github.io/react/)
- [Flask](http://flask.pocoo.org)
- [Yarn](https://yarnpkg.com/)
- [Sass](http://sass-lang.com)
- [Requests: HTTP for Humans](http://docs.python-requests.org/en/master/)
- [Moment.js](http://momentjs.com)
- [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/)

## Resources

- [Västtrafik Developer Portal](https://developer.vasttrafik.se/portal/#/)
- [Dark Sky API](https://darksky.net/dev/)
- [Unsplash](https://unsplash.com/developers)

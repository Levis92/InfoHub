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

- **Weather (Tomorrow API).** Displays current and hourly weather data for chosen location. Needs API key. You can get it from [tomorrow.io/weather-api](https://www.tomorrow.io/weather-api/).

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

## Next.js

The frontend is built with the Javascript framework [Next.js](https://nextjs.org/) based on [React](https://facebook.github.io/react/) and is styled with [CSS Modules](https://github.com/css-modules/css-modules) and the CSS extension language [Sass](http://sass-lang.com).

### Development

First you need to add a copy of `widget-settings.example.ts` and rename it to `widget-settings.ts`. The file can be found in `infohub/`. Add your own settings in the file.

Then you also need to make a copy of the `.env` file in `infohub/` and rename it `.env.local`. Add your API keys in it.

The first time you run the application (and every time you add new dependencies) you need do run:

```shell
$ yarn install
```

After that you only need to run:

```shell
$ yarn dev
```

#### Sass

Sass files are automatically compiled during runtime or when building the application.

### Production

To build and run the Next.js application you run:

```shell
$ yarn build && yarn start
```

## Dependencies

- [Next.js](https://nextjs.org/)
- [React](https://facebook.github.io/react/)
- [Yarn](https://yarnpkg.com/)
- [Sass](http://sass-lang.com)
- [React Query](https://react-query.tanstack.com/)
- [Day.js](https://day.js.org/en/)
- [Puppeteer](https://pptr.dev/)

## Resources

- [Västtrafik Developer Portal](https://developer.vasttrafik.se/portal/#/)
- [Tomorrow API](https://www.tomorrow.io/weather-api/)
- [Unsplash](https://unsplash.com/developers)
- [News API](https://newsapi.org/docs)

# Angular News: Webapp

Angular News is a news aggregator webapp built with Angular, dedicated to finding you the latest Angular news from the very best Tech Journalists and Developers.

No complex categories, just a simple list of great Angular news.

## Features

- The latest Angular news from the very best Tech Journalists and Developers.
- Articles are collected from a [dedicated API](https://github.com/steven-martin/angular-news-api, which is updated every 15 minutes.

## Quick Start

Download this repo locally and...

```
npm i
npm run start
```

This will start the dev server on `http://localhost:4200/`, connecting to the API at `http://api.angular.news`.

> If you wish to run both the webapp and the API locally then you will need to install the [dedicated API](https://github.com/steven-martin/angular-news-api) and update the API url. You can change the location of the API in the environments file.

## Development

### Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Testing

Run `npm run lint` to anaylise the project with eslint.

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `npm run test-report` to produce a unit test coverage report and will server it on `http://127.0.0.1:9875`.

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiEndpoint: 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&query=tron',
  movieSearchApiEndpoint: 'https://api.themoviedb.org/3/search/movie?page=1&include_adult=false',
  movieApiEndpoint: 'https://api.themoviedb.org/3/movie/',
  movieGenreApiEndpoint: 'https://api.themoviedb.org/3/genre/movie/list',
  restdbApi: 'https://movielist-5d7f.restdb.io/rest/watchlist',
  restdbApiKey:'631f8ec0fdc15b0265f17346',
  moviedbApiKey:'de187e9e947efda08964dd2e964361d5'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

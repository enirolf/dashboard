module.exports = {
  baseUrl: {
    protocol: 'https',
    hostname: 'api.openweathermap.org',
    path: '/data/2.5/weather',
  },

  query: {
    coordinates: {
      lat: 'lat',
      lon: 'lon',
    },
  },

  units: 'metric',
  lang: 'nl',
  APIkey: 'b6498eb826077ffc7c42a29530ac4abe',
};

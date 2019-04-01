var url = require('url');
var config = require('../config/weather');

module.exports = {
  generateWebAppURL: function(coordinates) {
    const baseUrlConfig = config.baseUrl;
    const queryConfig = config.query;

    let requestQuery = { appid: config.APIkey, lang: config.lang, units: config.units };

    if (coordinates.lat) {
      requestQuery[queryConfig.coordinates.lat] = coordinates.lat;
    }

    if (coordinates.lon) {
      requestQuery[queryConfig.coordinates.lon]  = coordinates.lon;
    }

    return url.format({
      protocol: baseUrlConfig.protocol,
      hostname: baseUrlConfig.hostname,
      pathname: baseUrlConfig.path,
      query: requestQuery,
    });
  },
};

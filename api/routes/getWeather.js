const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const generateWebAppURL = require('./utils/weather').generateWebAppURL;

router.get('/', function(req, res) {
  const coordinates = {
    lat: req.query.lat,
    lon: req.query.lon,
  };

  fetch(generateWebAppURL(coordinates))
    .then(res => res.json())
    .then(data => {
      res.send({
        temp: data.main.temp,
        wind_speed: data.wind.speed,
        wind_deg: data.wind.deg,
        id: data.weather[0].id,
      });
    })
    .catch(err => {
      res.redirect('/error');
    });
});

module.exports = router;

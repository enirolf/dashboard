var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  var name = req.param('n')
  res.send(`Hello, ${name}!`);
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET tesst listing. */
router.get('/', function(req, res, next) {
  res.send('Test thuw xem sao');
});


module.exports = router;

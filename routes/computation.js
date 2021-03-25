var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  val = Math.floor(Math.random() * Math.floor(50));
  console.log(req.query.val)
  if (req.query.val)
  val = req.query.val;
  res.send(`Math.sqrt() applied to ${val} is ${Math.sqrt(val)}`)
});

module.exports = router;

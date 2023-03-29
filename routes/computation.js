var express = require('express');
var router = express.Router();

var ran1=Math.random()*100;
var ran2=Math.random()*100;
var ans1=0;
var ans2=0;
var ans3=0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  ans1=Math.hypot(ran1,ran2);
  ans2=Math.ceil(ran1);
  ans3=Math.clz32(ran1);
  res.send(`hypot applied to ${ran1},${ran2} is ${ans1}  <br>  ceil applied to ${ran1} is ${ans2}  <br>  clz32 applied to ${ran1} is ${ans3}`);
});

module.exports = router;

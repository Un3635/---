/*
 * @Description: 
 * @Author: reiki.z
 * @Date: 2020-05-25 21:57:04
 */ 
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.render("layout", { title: 'user'})
});

module.exports = router;

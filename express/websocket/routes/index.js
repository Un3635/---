/*
 * @Description: 
 * @Author: reiki.z
 * @Date: 2020-05-25 21:57:04
 */ 
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'index' });
});

module.exports = router;

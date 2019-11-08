var express = require('express');
var router = express.Router();

const ctrlMain = require('../controller/main.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BookStore' });
});

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/Booklist', ctrlMain.Booklist);
router.get('/About', ctrlMain.About);

module.exports = router;

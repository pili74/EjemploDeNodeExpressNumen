var express = require('express');
var router = express.Router();
const {miPost} = require("../controllers/indexControllers")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/miPost', miPost)

module.exports = router;

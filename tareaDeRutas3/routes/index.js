var express = require('express');
var router = express.Router();
const { crearFarmacia, verFarmacia } = require("../controllers/indexControllers")



/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });


router.post('/crear', crearFarmacia)
router.get('/ver', verFarmacia)


module.exports = router;

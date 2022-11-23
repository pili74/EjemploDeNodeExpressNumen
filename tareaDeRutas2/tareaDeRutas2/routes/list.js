var express = require('express');
var router = express.Router();
const { lista } = require("../controllers/indexControllers")



//Crear una ruta “lista de compras” (ruta con query) que devuelva un objeto con 5 productos, se debe usar res.json({objeto}).
router.get('/lista_de_compras',lista )


module.exports = router;
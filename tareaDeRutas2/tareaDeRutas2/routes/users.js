var express = require('express');
var router = express.Router();
const { nombreApellido } = require("../controllers/indexControllers")



//Crear una ruta que reciba nombre y apellido por medio de params (ruta parametrizada) y devuelva por un res.send un query string armando un saludo (ej: res.send(`Hola ${nombre}`) ).
router.get('/nombres/:nombre/:apellido', nombreApellido)


module.exports = router;

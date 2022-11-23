var express = require('express');
var router = express.Router();
const { crearFarmacia, verFarmacia, verUnicaFarmacia, modificarFarmacia, eliminarFarmacia } = require("../controllers/indexControllers")
const { validarId } = require("../middlewares/validarId")
const { check } = require("express-validator") ///clase 4


/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });

//post
router.post('/crear', [
    check("nombrefarmacia").notEmpty().withMessage("El Campo Nombre de Farmacia es requerido").isLength({ min: 3, max: 20 }),
    check("direccion").notEmpty().withMessage("El Campo direccion es requerido"),
    check("telefono").notEmpty().withMessage("El Campo telefonoa es requerido"),
    check("empleado").notEmpty().withMessage("El Campo empleado es requerido"),
    check("stock").notEmpty().withMessage("El Campo stock es requerido"),
    check("producto").notEmpty().withMessage("El Campo producto es requerido"),
    check("cuit").notEmpty().withMessage("El Campo cuit es requerido")
], crearFarmacia)


//listar registros
router.get('/ver', verFarmacia)

//ver un registro
router.get('/ver/:id', validarId, verUnicaFarmacia) //trae sola la farmacia que coincide con el id

//put modificar un registro
router.put('/modificar/:id', validarId, [
    check("nombrefarmacia").notEmpty().withMessage("El Campo Nombre de Farmacia es requerido").isLength({ min: 3, max: 20 }),
    check("direccion").notEmpty().withMessage("El Campo direccion es requerido"),
    check("telefono").notEmpty().withMessage("El Campo telefonoa es requerido"),
    check("empleado").notEmpty().withMessage("El Campo empleado es requerido"),
    check("stock").notEmpty().withMessage("El Campo stock es requerido"),
    check("producto").notEmpty().withMessage("El Campo producto es requerido"),
    check("cuit").notEmpty().withMessage("El Campo cuit es requerido")
], modificarFarmacia)

//delete eliminar farmacia
router.delete('/borrar/:id', validarId, eliminarFarmacia)


module.exports = router;

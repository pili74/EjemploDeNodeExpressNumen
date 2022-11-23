var express = require('express');
var router = express.Router();
const { mat, dividir, sumar } = require("../controllers/indexControllers")


//Crear una ruta que reciba un numero (ruta con query) si el número es impar debe devolver un res.send("no autorizado") , y si el número es par debe devolver res.send("autorizado").
router.get('/numero', mat)

//Crear una ruta “dividir” la cual reciba dos parámetros (ruta parametrizada) divisor y dividendo, la misma tiene que devolver un res.json({error: "no se puede dividir por cero"}) si el usuario ingresa un 0, si no es el caso devolver res.json({resultado}).
router.get('/dividir/:num1/:num2', dividir)

//Crear una ruta que sume dos valores (ruta parametrizada), pero poner una condición de que no se puedan enviar números menores que cero, y el resultado se debe devolver por medio de un res.json({resultado}).
router.get('/sumar/:num1/:num2',sumar)


module.exports = router;

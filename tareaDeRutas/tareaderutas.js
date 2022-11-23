const express = require('express')//guardamos express en la constante
const app = express() //asignamos expresss como una funcion
const port = 3001 //señalamos un puerto

//Crear una ruta que reciba nombre y apellido por medio de params (ruta parametrizada) y devuelva por un res.send un query string armando un saludo (ej: res.send(`Hola ${nombre}`) ).
app.get('/nombres/:num1/:num2', (req, res) => {
  //send es para contenido estatico
  res.send('Hello  mi nobre es: ' + req.params.num1 + ' y mi apelidos es : ' + req.params.num2)
})


//Crear una ruta “dividir” la cual reciba dos parámetros (ruta parametrizada) divisor y dividendo, la misma tiene que devolver un res.json({error: "no se puede dividir por cero"}) si el usuario ingresa un 0, si no es el caso devolver res.json({resultado}).
app.get('/dividir/:num1/:num2', (req, res) => {
  if (req.params.num2 == 0) {
    res.json({
      error: "no se puede dividir por 0"
    })
  } else {
    res.json({
      resultado: (req.params.num1 / req.params.num2)
    })
  }
})

//Crear una ruta que sume dos valores (ruta parametrizada), pero poner una condición de que no se puedan enviar números menores que cero, y el resultado se debe devolver por medio de un res.json({resultado}).
app.get('/sumar/:num1/:num2', (req, res) => {
  if (req.params.num1 < 0 || req.params.num2 < 0) {
    res.json({
      error: "no se puede enviar numeros menores que 0"
    })
  } else {
    res.json({
      //parseo los parametros porque sino los toma como string y concatena en vez de sumar
      resultado: (Number(req.params.num1) + Number(req.params.num2))
    })
  }
})

//Crear una ruta que reciba un numero (ruta con query) si el número es impar debe devolver un res.send("no autorizado") , y si el número es par debe devolver res.send("autorizado").
app.get('/numero', (req, res) => {
  console.log(req.query)
  if ((req.query.edad % 2) == 1) {
    res.send('no autorizado')
  } else {
    res.send('autorizado')
  }
})

//Crear una ruta “lista de compras” (ruta con query) que devuelva un objeto con 5 productos, se debe usar res.json({objeto}).
app.get('/lista_de_compras', (req, res) => {
  console.log(req.query)
 res.json({
  agua:req.query.water,
  azucar:req.query.sugar,
  miel:req.query.honey,
  queso:req.query.cheese,
  coca:req.query.coke
 })
})

//URL //listen levanta los ervidores
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
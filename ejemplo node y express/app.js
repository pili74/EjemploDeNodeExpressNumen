//en aps solo quiero hacer configuracion

const express = require('express')//guardamos express en la constante
const app = express() //asignamos expresss como una funcion
const logger =require("morgan")

const indexRouter = require("./routes/index")
//configuracion
app.use(logger("dev"))
app.use(express.json())







//method hhtp get //URN
//req es lo que recibe el navegador y res(respuesta) es lo que devuelve
app.use("/api",indexRouter)


module.exports = app
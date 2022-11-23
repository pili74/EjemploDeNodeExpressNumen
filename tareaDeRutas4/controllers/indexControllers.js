const { Farmacia } = require("../models/farmacia")
const { validationResult } = require("express-validator")

const crearFarmacia = async (req, res) => {
    try {
        const err = validationResult(req) /////clase4
        if (err.isEmpty()) {
            const item = new Farmacia(req.body)//le paso el objeto req.body item.save()                    //le digo que guarde
            await item.save()
            res.status(201).json({ item })   //que me muestre item
        } else {
            res.status(501).json({ err })
        }
    } catch (error) {
        res.status(501).json({ error })
    }
}

//vamos a ver los datos que creamos arriba
const verFarmacia = async (req, res) => {
    const item = await Farmacia.find()
    res.status(200).json({ item })
}
//vamos a ver una sola farmacia eje 4
const verUnicaFarmacia = async (req, res) => {
    const item = await Farmacia.findById(req.params.id)
    res.status(200).json({ item })
}

//vamos a modificar un registro
const modificarFarmacia = async (req, res) => {
    try {
        const err = validationResult(req)
        if (err.isEmpty()) {
            await Farmacia.findByIdAndUpdate(req.params.id, req.body)
            res.status(201).json({ msg: "se modifico el producto" })
        } else {
            res.status(501).json({ err })
        }
    } catch (error) {
        res.status(501).json({ error })
    }
}

//delete eliminar registro
const eliminarFarmacia = async (req, res) => {
    const item = await Farmacia.findByIdAndDelete(req.params.id)
    res.status(204).json({ msg: "Farmacia Eliminada: ", item })
}
module.exports = { crearFarmacia, verFarmacia, verUnicaFarmacia, modificarFarmacia, eliminarFarmacia } //exportando index como una funcion no como objeto
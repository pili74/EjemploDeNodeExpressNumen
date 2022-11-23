const mongoose = require("mongoose")

const Schema = mongoose.Schema
const farmaciasSchema = new Schema ({
    nombrefarmacia:{
        type:String,
        required: true
    },
    direccion:{
        type: String,
        required: true
    },
    telefono:{
        type: Number,
        required:true
    },
    empleado:{
        type:String,
        required:true
    },
    stock:{
        type:Boolean,
        required:true
    },
    producto:{
        type: String,
        required:true
    },
    cuit:{
        type: Number,
        required:true
    }
})
const Farmacia = mongoose.model('Farmacia',farmaciasSchema)//el modelo se crea en mayuscula y singular
module.exports = {Farmacia}
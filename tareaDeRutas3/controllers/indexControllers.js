const { Farmacia } = require("../models/farmacia")

const crearFarmacia = async (req, res) => {
    try {
        const item = new Farmacia(req.body)//le paso el objeto req.body item.save()                    //le digo que guarde
        await item.save()
        res.status(201).json({ item })   //que me muestre item
    } catch (error) {
        res.status(501).json({ error })
    }
}

//vamos a ver los datos que creamos arriba
     const verFarmacia = async(req, res) => {
     const item = await Farmacia.find()
     res.status(200).json({item})


}
module.exports = { crearFarmacia,verFarmacia} //exportando index como una funcion no como objeto
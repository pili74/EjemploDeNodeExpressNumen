const { Farmacia } = require("../models/farmacia")
const validarId = async (req, res, next) => {
    try {
        const item = await Farmacia.findById(req.params.id)
        if (item !== null) {
            next()
        } else {
            res.status(500).json({ msg: "el id es invalido" })
        }
    } catch (error) {
        res.status(500).json({ error })
    }

}


module.exports = { validarId }
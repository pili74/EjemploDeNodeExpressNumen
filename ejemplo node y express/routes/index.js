const express = require("express")
const router = express.Router()
const {index, listadoAlumnos, ejemploPost,ejemploBody}= require("../controllers/indexControllers")

router.get('/', index)
router.get('/list', listadoAlumnos)
router.post('/ejemplo', ejemploPost)
router.get('/body', ejemploBody)

module.exports = router
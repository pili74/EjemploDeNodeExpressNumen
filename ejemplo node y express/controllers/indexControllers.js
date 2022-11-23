//funcion index que nos trae hello world
const index = (req, res) => {
    //asignando los codigos de estado
    res.status(200).send('Hello World!')
}


const listadoAlumnos = (req, res) => {
    res.status(200).json({
        alumno1: "Juan",
        alumno2: "Ana",
        alumno3: "Marcelo"
    })
}

const ejemploPost = (req, res) => {
    res.status(201).json({
        msg: "guardado con exito"

    })
}

const ejemploBody = (req, res) => {
    res.status(200).json({
        name: req.body.name,
        city: req.body.city
    })
}


module.exports = { index, listadoAlumnos, ejemploPost, ejemploBody } //exportando index como una funcion no como objeto
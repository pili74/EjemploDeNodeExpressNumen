//funcion index que trae nombre y apellido
const nombreApellido = (req, res) => {
    //send es para contenido estatico
    res.status(200).send('Hello  mi nobre es: ' + req.params.nombre + ' y mi apelidos es : ' + req.params.apellido)
}

const mat = (req, res) => {
    console.log(req.query)
    if ((req.query.edad % 2) == 0) {
        res.send(' autorizado')
    } else {
        res.send('no autorizado')
    }
}

const dividir = (req, res) => {
    if (req.params.num2 == 0) {
        res.json({
            error: "no se puede dividir por 0"
        })
    } else {
        res.json({
            resultado: (req.params.num1 / req.params.num2)
        })
    }
}

const sumar = (req, res) => {
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
}

const lista = (req, res) => {
    console.log(req.query)
    res.json({
        agua: req.query.water,
        azucar: req.query.sugar,
        miel: req.query.honey,
        queso: req.query.cheese,
        coca: req.query.coke
    })
}

const miPost = (req, res) => {
    res.status(200).json({
        nombre: req.body.nombre,
        status: req.body.status
    })
}
module.exports = { nombreApellido, mat, dividir, sumar, lista, miPost }
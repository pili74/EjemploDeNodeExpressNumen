const app=require("./app")
const port = 3000 //señalamos un puerto



//URL //listen levanta los ervidores
//en port recibe el puerto y le collback para que el servidor se levante y tire algo por consola
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
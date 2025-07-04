//Importações
require('dotenv').config()
const express = require("express")
const app = express()
const exphbs = require("express-handlebars")
const carRoutes = require("./routes/carRoutes")
const conn = require("./db/conn")
const CarControler = require("./controllers/CarController")

//Configurações
app.set("view engine", "handlebars")
app.engine("handlebars", exphbs.engine())

//Middlewares
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/cars", carRoutes)

//Conexão
conn.sync()
.then(()=>{
    app.listen(process.env.PORT || 3000)
})
.catch((err)=>{
    console.log(err)
})

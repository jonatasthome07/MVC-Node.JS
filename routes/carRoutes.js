const CarController = require("../controllers/CarController")
const express = require("express")
const Router = express.Router()

Router.get("/", CarController.showCars)
Router.get("/add", CarController.formCar)


module.exports = Router
const CarController = require("../controllers/CarController")
const express = require("express")
const Router = express.Router()

Router.get("/", CarController.showCars)
Router.get("/add", CarController.formCar)
Router.post("/add", CarController.addCar)
Router.get("/edit/:id", CarController.editCar)
Router.post("/edit/:id", CarController.saveEdit)
Router.post("/delete", CarController.deleteCar)

module.exports = Router
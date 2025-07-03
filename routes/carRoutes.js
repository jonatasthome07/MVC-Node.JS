const CarController = require("../controllers/CarController")
const express = require("express")
const Router = express.Router()

Router.get("/", CarController.showCars)

module.exports = Router
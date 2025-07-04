const Car = require("../models/Car")

module.exports = class CarControler {
    static async showCars (req,res){
        res.render("cars/home")
    }

    static async formCar (req,res){
        res.render("cars/addcar")
    }
}

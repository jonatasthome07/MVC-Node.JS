const Car = require("../models/Car")

module.exports = class CarControler {
    static async showCars (req,res){
        res.render("cars/home")
    }

    static async formCar (req,res){
        res.render("cars/addcar")
    }

    static async addCar (req,res){
        const brand = req.body.brand
        const model = req.body.model
        const year = req.body.year
        const used = req.body.used

        const car = {brand, model, year, used}
        await Car.create(car)
        res.redirect("/cars")
    }
}

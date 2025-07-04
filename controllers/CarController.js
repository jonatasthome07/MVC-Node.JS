const Car = require("../models/Car")

module.exports = class CarControler {
    static async showCars (req,res){
        const cars = await Car.findAll({raw:true})
        res.render("cars/home", {cars})
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

    static async editCar (req,res){
        const id = req.params.id
        const car = await Car.findOne({raw:true, where:{id:id}})
        res.render("cars/editcar", {car})
    }

    static async saveEdit (req,res){
        const id = req.body.id
        const brand = req.body.brand
        const model = req.body.model
        const year = req.body.year

        const car = {brand,model,year}
        await Car.update(car,{where:{id:id}})
        res.redirect("/cars")
    }
}

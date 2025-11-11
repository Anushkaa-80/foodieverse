const foodModel = require('../models/food.model.js');
const storageService = require("../services/storage.services.js")
const { v4:uuid} = require("uuid") //via npm i uuid

async function createFood(req, res){
    console.log(req.foodPartner);
    
    console.log(req.body) //frontend se data recieve hona chahiye req.body me
    console.log(req.file) // output the file dataa
    //server pe file store nhi krte,when deploying on server we dont have access to server, ssd

 const fileUploadResult = await storageService.uploadFile(req.file.buffer,uuid()) //whenever called uuid generates unique id.


    res.send("food item created")
}

module.exports={
    createFood
}
const foodModel = require('../models/food.model.js');
const storageService = require("../services/storage.services.js")
const { v4:uuid} = require("uuid") //via npm i uuid

async function createFood(req, res){
    console.log(req.foodPartner);
    
    console.log(req.body) //frontend se data recieve hona chahiye req.body me
    console.log(req.file) // output the file dataa
    //server pe file store nhi krte,when deploying on server we dont have access to server, ssd

 const fileUploadResult = await storageService.uploadFile(req.file.buffer,uuid()) //whenever called uuid generates unique id.

  console.log(fileUploadResult);
    res.send("food item created")
}

async function getFoodItems(Req,res)
{
    const foodItems= await foodModel.find({})
    res.status(200).json({
        messgae:"Food Items fetched successfully",
        foodItems
    })
}

module.exports={
    createFood,
    getFoodItems
}
const foodModel = require('../models/food.model.js');
const storageService = require("../services/storage.services.js")
const likeModel = require('../models/likes.model.js');
const saveModel = require("../models/save.model.js");
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

async function likeFood(req,res){

    const {foodId}= req.body;

    const user= req.user;

    const isAlreadyLiked = await likeModel.findOne({
        user: user._id
,
food: foodId    })

if(isAlreadyLiked)
{
    await likeModel.deleteOne({
        user: user._id,
        food:foodId
    })
    await foodModel.findByIdAndUpdate(foodId,{
        $inc:{likeCount: -1}
    })
    return res.status(200).json({
        message: "Food unliked successfully"
    })
}

const like = await likeModel.create({
    user: user._id,
    food: foodId
})

await foodModel.findByIdAndUpdate(foodId,{
    $inc:{likeCount: 1}
})

res.status(201).json({
    message: "Food liked successfully",
    like
})

}
async function saveFood(req,res){
    const {foodId} = req.body;
    const user = req.user;
    const isAlreadySaved = await saveModel.findOne({
        user: user._id,
        food: foodId
    })
    if (isAlreadySaved)
    {
        await saveModel.deleteOne({
            user: user._id,
            food: foodId
        })
        return res.status(200).json({
            message: " Food unsaved successfully"
        })
    }

    const save = await saveModel.create({
        user: user._id,
        food: foodId
    })
    res.status(201).json({
        message: "Food saved successfully",
        save
    })
}


module.exports={
    createFood,
    getFoodItems,
    likeFood,
    saveFood
}

const mongoose= require('mongoose')

function connectDB()
{
    mongoose.connect("mongodb://127.0.0.1:27017/food-view")
    .then(()=>{
        console.log("MongoDB connected");
    })
    .catch((err)=>{
        console.log("MongoDB connecction error:",err)
    })
}
//the above function is called in seerver.js file
module.exports = connectDB;
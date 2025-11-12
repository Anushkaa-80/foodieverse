const mongoose= require('mongoose')

function connectDB()
{
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("MongoDB connected");
    })
    .catch((err)=>{
        console.log("MongoDB connecction error:",err)
    })
}
//the above function is called in seerver.js file
module.exports = connectDB;
const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  const { fullName, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
    email,
  });
  if (isUserAlreadyExists) {
    return res.status(400).json({
      message: "user already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await userModel.create({
    fullName,
    email,
    password: hashedPassword,
  });
  // password should be sent as hashed not in plain text
  // to know where th request is coming from , we create a token (jsonwebtoken)and assign it to them, token is saved in cookies(cookie parser)
  //cookie parser is used as middleware
  
  const token= jwt.sign({
    id:user._id,},"45854ba52ef6e5d5c3a57f478c55be5f")

    res.cookie("token", token) //save the created token in cookie
    res.status(201).json({
        message: "user registered successfully",
        user:{
            _id: user._id,
            email:user.email,
            fullName: user.fullName
        }
    })

}

async function loginUser(req,res){
   const {email, password} = req.body;
   
   const user = await userModel.findOne({
    email
   })
   if(!user)
   {
    return res.status(400).json({
        message:"Invalid email or password"
    })
   }

   const isPasswordValid = await bcrypt.compare(password, user.password);
   if(!isPasswordValid)
   {
    return res.status(400).json({
        message:"Invalid email or password"
    })
   }
}


module.exports ={
    registerUser,  loginUser
}
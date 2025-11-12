const userModel = require("../models/user.model");
const foodPartnerModel = require("../models/foodpartner.model")
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

  const token = jwt.sign(
    {
      id: user._id,
    },process.env.JWT_SECRET)

  res.cookie("token", token); //save the created token in cookie
  res.status(201).json({
    message: "user registered successfully",
    user: {
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
    },
  });
}

async function loginUser(req, res) {
  const { email, password } = req.body;

  const user = await userModel.findOne({
    email,
  });
  if (!user) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }
  // if we get user, password matched --->now we generate token--> send response

 const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET
  );
 res.cookie("token", token)

  res.status(201).json({
    message:"user logged in  successfully",
    user:{
        _id:user._id,
        emial: user.email,
        fullName: user.fullName
    }
  })
}

function logoutUser(req,res)
{
  res.clearCookie("token");
  res.status(200).json({
    message:"User logged out successfully"
  })

}

async function registerFoodPartner(req,res) {
  const {name,email,password, phone, address, contactName} = req.body;
  const isAccountAlreadyExists= await foodPartnerModel.findOne({email})

  if(isAccountAlreadyExists)
  {
    return res.status(400).json({
      message:"Food partener account already exists"
    })
  }
  const hashedPassword = await bcrypt.hash(password,10);

  const foodPartner = await foodPartnerModel.create({
    name,
    email,
    password:hashedPassword,
    phone,
    address,
    contactName
  })
  const token = jwt.sign({
    id:foodPartner._id,
    }, process.env.JWT_SECRET)

 res.cookie("token", token);

    res.status(201).json({
      message:"Food partner registered successfully ",
      foodPartner:{
        _id:foodPartner._id,
        email:foodPartner.email,
        name:foodPartner.name,
        address: foodPartner.address,
        contactName: foodPartner.contactName,
        phone: foodPartner.phone
      }
    })
  

}

async function loginFoodPartner(req,res){
  const {email, password}= req.body;
  const foodPartner = await foodPartnerModel.findOne({email})

  if(!foodPartner)
  {
   return res.json(400).json({
      message:"Invalid email "
    })
  }

  const isPasswordValid= await bcrypt.compare(password, foodPartner.password)

  if(!isPasswordValid)
  {
    return res.status(400).json(
      {
        message: "Password is incorrect"
      }
    )
  }

  const token = jwt.sign({
    id: foodPartner._id,

  }, process.env.JWT_SECRET)
  
res.cookie("token", token)

res.status(200).json({
  message:"Food Partner logged in successfully",
  foodPartner:{
    _id: foodPartner._id,
    email:foodPartner.email,
    name:foodPartner.name
  }
})

}


function logoutFoodPartner(req,res)
{
 res.clearCookie("token");
 res.status(200).json({
  message:"Food partener logged out successfully"
 })
}
module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  registerFoodPartner,
  loginFoodPartner,
  logoutFoodPartner
};

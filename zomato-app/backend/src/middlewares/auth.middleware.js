const foodPartnerModel = require("../models/foodpartner.model")
const jwt = require("jsonwebtoken");

async function authFoodPartnerMiddleware(req,res,next)
{
    const token = req.cookies.token;
    if(!token)
    {
        return res.status(401).json({
            message:"Please login first"
        })
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET) // it checks the token whether it is corrector not, if true , the token contains the foodpartner id and stored in decoded
        
        const foodPartner = await foodPartnerModel.findById(decoded.id);

        req.foodPartner= foodPartner

        next()

    } catch(err)
    {
        return res.status(401).json({
            message:"Invalid token"
        })
    }
    
}

module.exports = {
    authFoodPartnerMiddleware
};
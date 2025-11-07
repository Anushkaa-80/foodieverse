const express = require('express');
const authController = require("../controllers/auth.controller")


const router = express.Router();

//user Auth APIs
router.post('/user/register', authController.registerUser)
router.post('/user/login', authController.loginUser)
router.get('/user/logout',authController.logoutUser)

// FOOD partner auth apis
router.post('/food-partner/register',authController.registerFoodPartner)
router.post('/food-partner/login',authController.loginFoodPartner)
router.get('/food-partner/logout',authController.logoutFoodPartner)





// the above api we have created must be informed to server and app , if we dont do that they will never come to know that above api exists and itll send "not found" response
module.exports = router;
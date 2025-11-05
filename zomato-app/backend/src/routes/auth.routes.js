const express = require('express');
const authController = require("../controllers/auth.controller")


const router = express.Router();

router.post('/user/register', authController.registerUser)
router.post('/user/login', authController.loginUser)
// the above api we have created must be informed to server and app , if we dont do that they will never come to know that above api exists and itll send "not found" response
module.exports = router;
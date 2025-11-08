const express = require('express');
const foodController= require("../controllers/food.controller")
const authMiddleware= require("../middlewares/auth.middleware")

const router= express.Router();
const multer = require('multer');

const upload= multer({
    storage: multer.memoryStorage(),
})
// express have problem that is it could not read any types of files which is coming from frontend thats why we use MULTER

//("video/mama/chacha/anything") butthe condition is name should be matched to the frontend var

/* POST /api/food/ [protected] */
router.post('/', authMiddleware.authFoodPartnerMiddleware ,upload.single("video"),foodController.createFood)

module.exports= router;
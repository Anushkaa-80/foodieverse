const express = require('express');
const foodController= require("../controllers/food.controller");
const authMiddleware= require("../middlewares/auth.middleware");
const router= express.Router();
const multer = require('multer');

const upload= multer({
    storage: multer.memoryStorage(),
})
// express have problem that is it could not read any types of files which is coming from frontend thats why we use MULTER

//("video/mama/chacha/anything") butthe condition is name should be matched to the frontend var

/* POST /api/food/ [protected] */
router.post('/', authMiddleware.authFoodPartnerMiddleware ,upload.single("video"),foodController.createFood)

router.get("/",authMiddleware.authUserMiddleware, foodController.getFoodItems)
//pehle request  authFoodPartnerMiddleware yha aayega ye foodpartner ko uauthenticate krke batayega ki req shi jgh se aarhi hai ya nhi, next() called fir wo foodCreate pe chla jayega  



/* POST /api/food/ [protected] */

router.get("/", authMiddleware.authUserMiddleware,
    foodController.getFoodItems
)

router.post('/like',authMiddleware.authUserMiddleware, foodController.likeFoodItem)

router.post('/save',
    authMiddleware.authUserMiddleware,
    foodController.saveFood
)

// for nprmal user: when user scroll to their feed , so get the new video to scroll, all videos of food items goes here

module.exports= router;
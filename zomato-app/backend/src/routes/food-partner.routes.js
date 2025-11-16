const express = require('express');
const authMiddleware= require("../middlewares/auth.middleware");
const foodPartnerController= require("../controllers/food-partner.controller");
const router= express.Router();

router.get("/:id", authMiddleware.authUserMiddleware, foodPartnerController.getFoodPartnerById)
// ye api tabhi access hoga jab user authenticate hoga , isliye authUserMiddleware use kiya hai

module.exports= router;
const express= require('express');
const router= express.Router();
const authController = require("../controllers/authController");
const {registrationValidator} = require('../helpers/validation');

router.post('/register' ,registrationValidator ,authController.registerUser);

module.exports = router;
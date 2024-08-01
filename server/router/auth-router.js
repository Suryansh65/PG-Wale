const express = require('express');
const router = express.Router();
const signupSchema= require("../validators/auth-validator");
const loginSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const authcontrollers = require('../controllers/auth-controller');
const authMiddleware = require("../middlewares/auth-middleware");


router.route("/").get(authcontrollers.home);
router.route("/register").post(authcontrollers.register);
router.route("/login").post(authcontrollers.login);
router.route("/user").get(authMiddleware,authcontrollers.user);
module.exports = router;
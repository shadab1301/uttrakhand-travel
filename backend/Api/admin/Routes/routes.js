const express = require("express");
const routes = express.Router();
const {checkTcken} = require("../auth.middleware");
const {signupValidation,LoginValidation} = require("../../../Services/Validation/Auth.Validator");
const {SignUp,Login} = require("../Controller/Admin.Controller");

routes.post('/register',signupValidation,SignUp);
routes.post('/login',LoginValidation,Login);
module.exports = routes;
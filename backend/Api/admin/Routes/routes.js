const express = require("express");
const routes = express.Router();
const {checkTcken} = require("../Middleware/auth.middleware");
const {signupValidation,LoginValidation} = require("../../../Services/Validation/Auth.Validator");
const {SignUp,Login} = require("../Controller/Admin.Controller");
const { uploadFile } = require("../../../Services/CommonServices");

routes.post(
  "/register",
  uploadFile("destination").single("cityImage"),
  signupValidation,
  SignUp
);
routes.post('/login',LoginValidation,Login);



module.exports = routes;
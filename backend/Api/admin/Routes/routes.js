const express = require("express");
const routes = express.Router();
const {checkTcken} = require("../Middleware/auth.middleware");
const {signupValidation,LoginValidation} = require("../../../Services/Validation/Auth.Validator");
const {SignUp,Login} = require("../Controller/Admin.Controller");
const { uploadFile } = require("../../../Services/CommonServices");
const { addGallery, fetchGalleryById, fetchGallery, deleteGallery, updateGallery } = require("../Controller/Gallery.Controller");

routes.post(
  "/register",
  uploadFile("destination").single("cityImage"),
  signupValidation,
  SignUp
);
routes.post('/login',LoginValidation,Login);

routes.post("/gallery", uploadFile("gallery").single("image"), addGallery);
routes.get("/gallery", fetchGallery);
routes.get("/gallery/:id", fetchGallery);
routes.put("/gallery", updateGallery);
routes.delete("/gallery/:id", deleteGallery);






module.exports = routes;
const express = require("express");
const routes = express.Router();
const {checkTcken} = require("../Middleware/auth.middleware");
const {signupValidation,LoginValidation} = require("../../../Services/Validation/Auth.Validator");
const {TestimonialValidation,AddressValidator,EnqueryValidator} = require("../../../Services/Validation/Common.Validator");
const {SignUp,Login} = require("../Controller/Admin.Controller");
const { uploadFile } = require("../../../Services/CommonServices");

const {   fetchGallery, deleteGallery, updateGallery, createGallery } = require("../Controller/Gallery.Controller");
const { createPackage, fetchPackages, updatePackage, deletePackage } = require("../Controller/Packages.Controller");
const {AddTestimonial,TestimonialList,DeleteTestimonial} = require("../Controller/Testimonial.Controller");
const {EditAddress,AddressList} = require("../Controller/Address.Controller");
const { AddEnquery, EnqueryList, ChangeEnqueryStatus } = require("../Controller/Enquery.Controller");
routes.post(
  "/register",
  uploadFile("destination").single("cityImage"),
  signupValidation,
  SignUp
);
routes.post('/login',LoginValidation,Login);


// Gallery
routes.post("/gallery", uploadFile("gallery").single("image"), createGallery);
routes.get("/gallery", fetchGallery);
routes.get("/gallery/:id", fetchGallery);
routes.put("/gallery", updateGallery);
routes.delete("/gallery/:id", deleteGallery);

// Packages
routes.post(
  "/package",
  uploadFile("packages").single("pkgImage"),
  createPackage
);
routes.get("/package", fetchPackages);
routes.get("/package/:id", fetchPackages);
routes.put("/package", updatePackage);
routes.delete("/package/:id", deletePackage);

routes.post('/testimonial',uploadFile('testimonial').single('image'),TestimonialValidation,AddTestimonial);
routes.get('/testimonial',TestimonialList);
routes.delete('/testimonial/:id',DeleteTestimonial);

routes.get('/address',AddressList);
routes.put("/address/:id",AddressValidator, EditAddress);

routes.post('/enquery',EnqueryValidator,AddEnquery);
routes.get('/enquery',EnqueryList);
routes.put('/enquery/:id',ChangeEnqueryStatus);


module.exports = routes;
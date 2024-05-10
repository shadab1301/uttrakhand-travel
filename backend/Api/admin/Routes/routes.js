const express = require("express");
const routes = express.Router();
const {checkTcken} = require("../Middleware/auth.middleware");
const {signupValidation,LoginValidation} = require("../../../Services/Validation/Auth.Validator");
const {TestimonialValidation,AddressValidator,EnqueryValidator} = require("../../../Services/Validation/Common.Validator");
const {SignUp,Login} = require("../Controller/Admin.Controller");
// const { uploadFile } = require("../../../Services/CommonServices");

const { UploadFiles: uploadFile } = require("../../../Services/Common.Services");

const {fetchGallery, deleteGallery, updateGallery, createGallery } = require("../Controller/Gallery.Controller");
const {createPackage, fetchPackages, updatePackage, deletePackage } = require("../Controller/Packages.Controller");
const {AddTestimonial,TestimonialList,DeleteTestimonial} = require("../Controller/Testimonial.Controller");
const {EditAddress,AddressList, AddAddress} = require("../Controller/Address.Controller");
const {AddEnquery, EnqueryList, ChangeEnqueryStatus } = require("../Controller/Enquery.Controller");
const {fetchDestination, updateDestination, deleteDestination, createDestination } = require("../Controller/Destination.Controller");


routes.post("/register",uploadFile("destination").single("cityImage"),signupValidation,SignUp);
routes.post('/login',LoginValidation,Login);
// Gallery

routes.post("/gallery", uploadFile("gallery").single("image"), createGallery);
routes.get("/gallery", fetchGallery);
routes.get("/gallery/:id", fetchGallery);
routes.patch("/gallery/:id", uploadFile("gallery").single("image"), updateGallery);
routes.delete("/gallery/:id", deleteGallery);

// Packages
routes.post(
  "/package",
  // PackagesValidator,
  uploadFile("packages").fields([
    { name: "pkgImage" },
    { name: "BannerImage" },
  ]),
  createPackage
);
routes.get("/package", fetchPackages);
routes.get("/package/:id", fetchPackages);
routes.patch(
  "/package/:id",
  uploadFile("packages").fields([
    { name: "pkgImage" },
    { name: "BannerImage" },
  ]),
  // PackagesValidator,
  updatePackage
);
routes.delete("/package/:id", deletePackage);

routes.post('/testimonial',uploadFile('testimonial').single('image'),TestimonialValidation,AddTestimonial);
routes.get('/testimonial',TestimonialList);
routes.delete('/testimonial/:id',DeleteTestimonial);


routes.post("/destination",uploadFile("destination").single("cityImage"),createDestination);
routes.get("/destination", fetchDestination);
routes.get("/destination/:id", fetchDestination);

routes.patch("/destination/:id",uploadFile("destination").single("cityImage"), updateDestination);
routes.delete("/destination/:id", deleteDestination);

routes.post("/address", AddAddress);
routes.get('/address',AddressList);
routes.put("/address/:id",AddressValidator, EditAddress);

routes.post('/enquery',EnqueryValidator,AddEnquery);
routes.get('/enquery',EnqueryList);
routes.put('/enquery/:id',ChangeEnqueryStatus);


module.exports = routes;

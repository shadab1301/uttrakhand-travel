const express = require("express");
const routes = express.Router();
const { checkTcken } = require("../Middleware/auth.middleware");
const {
  signupValidation,
  LoginValidation,
} = require("../../../Services/Validation/Auth.Validator");
const { SignUp, Login } = require("../Controller/Admin.Controller");
const { uploadFile } = require("../../../Services/CommonServices");
const {
  fetchGallery,
  deleteGallery,
  updateGallery,
  createGallery,
} = require("../Controller/Gallery.Controller");
const {
  createPackage,
  fetchPackages,
  updatePackage,
  deletePackage,
} = require("../Controller/Packages.Controller");
const {
  fetchDestination,
  updateDestination,
  deleteDestination,
  createDestination,
} = require("../Controller/Destination.Controller");
const {
  DestinationValidator,
  PackagesValidator,
  GallleryValidator,
} = require("../../../Services/Validation/Common.Validator");

routes.post(
  "/register",
  uploadFile("destination").single("cityImage"),
  signupValidation,
  SignUp
);
routes.post("/login", LoginValidation, Login);

// Gallery
routes.post(
  "/gallery",
  GallleryValidator,
  uploadFile("gallery").single("image"),
  createGallery
);
routes.get("/gallery", fetchGallery);
routes.get("/gallery/:id", fetchGallery);
routes.put("/gallery", GallleryValidator, updateGallery);
routes.delete("/gallery/:id", deleteGallery);

// Packages
routes.post(
  "/package",
  // PackagesValidator,
  uploadFile("packages").single("pkgImage"),
  createPackage
);
routes.get("/package", fetchPackages);
routes.get("/package/:id", fetchPackages);
routes.put(
  "/package",
  // PackagesValidator,
  updatePackage
);
routes.delete("/package/:id", deletePackage);

// Destination
routes.post(
  "/destination",
  // DestinationValidator,
  uploadFile("destination").single("cityImage"),
  createDestination
);
routes.get("/destination", fetchDestination);
routes.get("/destination/:id", fetchDestination);
routes.put(
  "/destination",
  // DestinationValidator,
  updateDestination
);
routes.delete("/destination/:id", deleteDestination);

module.exports = routes;

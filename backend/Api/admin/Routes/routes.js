const express = require("express");
const routes = express.Router();
const {checkTcken} = require("../auth.middleware");
const {UploadFiles} =require("../../../Services/Common.Services");
const {signupValidation,LoginValidation} = require("../../../Services/Validation/Auth.Validator");
const {TestimonialValidation,AddresValidatord} = require("../../../Services/Validation/Common.Validator");
const {SignUp,Login} = require("../Controller/Admin.Controller");
const { AddTestimonial, TestimonialList, DeleteTestimonial } = require("../Controller/Testimonial.Controller");
const{AddressList,EditAddress} = require("../Controller/Address.Controller");

routes.post('/register',signupValidation,SignUp);
routes.post('/login',LoginValidation,Login);

routes.post('/testimonial',UploadFiles('testimonial').single('image'),TestimonialValidation,AddTestimonial);
routes.get('/testimonial',TestimonialList);
routes.delete('/testimonial/:id',DeleteTestimonial);

routes.get('/address',AddressList);
routes.put("/address/:id",AddresValidatord, EditAddress)
module.exports = routes;
const express = require("express");
const routes = express.Router();
const {checkTcken} = require("../auth.middleware");
const {signupValidation,LoginValidation} = require("../../../Services/Validation/Auth.Validator");
const {TestimonialValidation} = require("../../../Services/Validation/Common.Validator");
const {SignUp,Login} = require("../Controller/Admin.Controller");
const { AddTestimonial, TestimonialList, DeleteTestimonial } = require("../Controller/Testimonial.Controller");
const {UploadFiles} =require("../../../Services/Common.Services");


routes.post('/register',signupValidation,SignUp);
routes.post('/login',LoginValidation,Login);

routes.post('/testimonial',UploadFiles('testimonial').single('image'),TestimonialValidation,AddTestimonial);
routes.get('/testimonial',TestimonialList);
routes.delete('/testimonial/:id',DeleteTestimonial);
module.exports = routes;
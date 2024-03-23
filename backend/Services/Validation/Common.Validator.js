const {check} = require("express-validator");

exports.TestimonialValidation  = [
    check('customer_name',"customer name is required").not().isEmpty(),
    check("description","description could not be empty").not().isEmpty(),
];
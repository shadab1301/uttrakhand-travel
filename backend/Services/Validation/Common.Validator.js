const { check } = require("express-validator");

exports.TestimonialValidation = [
    check('customer_name', "customer name is required").not().isEmpty(),
    check("description", "description could not be empty").not().isEmpty(),
];

exports.EnqueryValidator = [
    check('feminine', 'Title can not be blank.').not().isEmpty(),
    check('first_name')
        .isLength({ min: 2, max: 20 }).withMessage('First Name must be  between 2-20 characters.')
        .matches(/^[A-Za-z\s]+$/).withMessage('First Name must be alphabetic.'),
    check('last_name')
        .isLength({ min: 2, max: 20 }).withMessage('Last Name must be  between 2-20 characters.')
        .matches(/^[A-Za-z\s]+$/).withMessage('Last Name must be alphabetic.'),
    check("mobile_number").isNumeric().withMessage('Mobile number should be numeric.')
        .isLength({ min: 10, max: 10 }).withMessage('Mobile number must be 10 digit.'),
    check("message").not().isEmpty().withMessage("Message can not  be blank."),

];

exports.DestinationValidator = [
  check("cityName").not().isEmpty().withMessage("cityName can not be blank."),
  ,
];

exports.PackagesValidator = [
  check("title").not().isEmpty("Title can not be blank."),
  check("subTitle")
    .not()
    .isEmpty()
    .withMessage("First Name must be alphabetic."),
  check("numbersOfDay")
    .not()
    .isEmpty()
    .withMessage("numbersOfDay can not  be blank."),
  check("description")
    .not()
    .isEmpty()
    .withMessage("description can not  be blank."),
];
exports.GallleryValidator = [
  check("title").not().isEmpty("Title can not be blank."),
  check("description")
    .not()
    .isEmpty()
    .withMessage("description can not  be blank."),
];


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
    check('enquery_type', 'Enquery type can not be empty').not().isEmpty(),
    check('email', 'Please provide a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check("message").not().isEmpty().withMessage("Message can not  be blank."),
];

exports.AddressValidator = [
    check('address', 'Address can not be empty.').not().isEmpty(),
    check("primary_number").isNumeric().withMessage('Primary number should be numeric.')
        .isLength({ min: 10, max: 10 }).withMessage('Primary number must be 10 digit.'),
    check("alternate_number").isNumeric().withMessage('Primary number should be numeric.')
        .isLength({ min: 10, max: 10 }).withMessage('Primary number must be 10 digit.'),
    check('email', 'Please provide a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('WebUrl', 'web url can not be blank.').not().isEmpty(),
    check('map_location', 'map location can not be empty').not().isEmpty(),

];
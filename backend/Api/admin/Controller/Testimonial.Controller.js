const date = require('date-and-time');
require("dotenv").config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const { validationResult } = require('express-validator');

const Testimonial = require("../Model/Testimonial.Model");


exports.AddTestimonial = async (req, res, next) => {
    try {
        let validationError = validationResult(req);
        if (validationError.errors.length > 0) {
            return res.status(409).json({
                status: 409,
                data: validationError.errors.map((errorData) => {
                    return {
                        'input': errorData.path,
                        'ErrorMsg': errorData.msg
                    }
                }),
                message: 'Please provide the valid data.'
            });
        }
        else {

            const { customer_name, description, image } = req.body;
        }

    } catch (err) {
        return res.status(500).json({
            status: 500,
            message: 'Internal server Error.',
            Error: err
        });
    }
}
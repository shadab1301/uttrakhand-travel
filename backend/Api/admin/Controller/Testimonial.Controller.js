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
            let obj = {
                _id: new mongoose.Types.ObjectId(),
                customer_name: req?.body?.customer_name.trim(),
                description: req?.body?.description,
                image: req?.file?.filename
            };
            console.log(obj);
            const testimonial_res = await Testimonial.create(obj);
            console.log(testimonial_res);
            if (testimonial_res) {
                return res.status(201).json({
                    status: 201,
                    _id: testimonial_res._id,
                    message: 'Testimonial created.'
                });
            } else {
                return res.status(404).json({
                    status: 404,
                    message: 'Testimonial not created.'
                });
            }
        }
    } catch (err) {
        return res.status(500).json({
            status: 500,
            message: 'Internal server Error.',
            Error: err
        });
    }
}

exports.TestimonialList = async (req, res, next) => {
    try {
        let TestimonialRes = await Testimonial.find().sort({ _id: -1 });
        if (TestimonialRes?.length > 0) {
            return res.status(200).json({
                status: 200,
                count: TestimonialRes?.length,
                data: TestimonialRes.map((data) => {
                    return {
                        id: data?._id,
                        customer_name: data?.customer_name,
                        description: data?.description,
                        image: `./public/testimonial/${data?.image}`,
                    }
                }),
                message: 'Testimonial list.'
            });

        } else {
            return res.status(200).json({
                status: 200,
                count: 0,
                data: [],
                message: 'Testimonial list.'
            });
        }

    }
    catch (err) {
        return res.status(500).json({ status: 500, Error: err, message: 'Internal server Error !.' });

    }
}

exports.DeleteTestimonial = async (req, res, next) => {
    try {
        if (!req?.params?.id) { return res.status(404).json({ message: "Please provide valid id." }); }
        // const GetResponce = await Testimonial.find({ _id: req?.params?.id});
        const GetResponce = await Testimonial.deleteOne({ _id: req?.params?.id });
        if (GetResponce?.deletedCount > 0) {
            return res.status(200).json({
                status: 200,
                count: GetResponce?.deletedCount,
                id: req?.params?.id,
                message: 'Testimonial  deleted successfully.'
            });

        } else {
            return res.status(200).json({
                status: 200,
                count: 0,
                id: req?.params?.id,
                message: `Testimonial could delete try again(Id couldn't find).`
            });
        }

    }
    catch (err) {
        return res.status(500).json({ status: 500, Error: err, message: 'Internal server Error !.' });

    }


}
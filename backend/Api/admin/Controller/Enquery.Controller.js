const date = require('date-and-time');
require("dotenv").config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const { validationResult } = require('express-validator');

const Enquery = require("../Model/Enquiry.Model");


exports.AddEnquery = async (req, res, next) => {
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
        } else {
            let obj = {
                _id: new mongoose.Types.ObjectId(),
                feminine: req?.body?.feminine.trim(),
                first_name: req?.body?.first_name[0].toUpperCase() + req?.body?.first_name.slice(1).trim(),
                last_name: req?.body?.last_name[0].toUpperCase() + req?.body?.last_name.slice(1).trim(),
                mobile_number: req?.body?.mobile_number.trim(),
                enquery_type: req?.body?.enquery_type.trim(),
                email: req?.body?.email.trim(),
                message: req?.body?.message.trim(),
            };
            const enquery_res = await Enquery.create(obj);
            if (enquery_res) {
                return res.status(201).json({
                    status: 201,
                    _id: enquery_res._id,
                    message: 'Enquery sent, we will get back to you soon!'
                });
            } else {
                return res.status(404).json({
                    status: 404,
                    message: 'Enquery not sent.'
                });
            }

        }

    } catch (err) {
        return res.status(500).json({ status: 500, Error: err, message: 'Internal server Error !.' });
    }
}



exports.EnqueryList = async (req, res, next) => {
    try {
        let EnqueryRes = await Enquery.find().sort({ _id: -1 });
        if (EnqueryRes?.length > 0) {
            return res.status(200).json({
                status: 200,
                count: EnqueryRes?.length,
                data: EnqueryRes.map((data) => {
                    return {
                        id: data?._id,
                        feminine: data?.feminine,
                        first_name: data?.first_name,
                        last_name: data?.last_name,
                        mobile_number: data?.mobile_number,
                        enquery_type: data?.enquery_type,
                        email: data?.email,
                        message: data?.message,
                        status: data?.status,
                    }
                }),
                message: 'Enquery list.'
            });

        } else {
            return res.status(200).json({
                status: 200,
                count: 0,
                data: [],
                message: 'Enquery list.'
            });
        }

    }
    catch (err) {
        return res.status(500).json({ status: 500, Error: err, message: 'Internal server Error !.' });

    }
}




exports.ChangeEnqueryStatus = async (req, res, next) => {
    try {
        if (!req?.params?.id) return res.status(404).json({ status: 404, message: 'pass enquery id.' });
        const filter = { _id: req?.params?.id };
        const status = req.body;
        const updateAddRes = await Enquery.findOneAndUpdate(filter, status, { upsert: true, returnDocument: 'after', returnOriginal: false, includeResultMetadata: true });
        if (updateAddRes) {
            return res.status(200).json({
                status: 200,
                message: 'enquery status updated successfully.',
                id: req?.params?.id,
            });

        } else {
            return res.status(200).json({
                status: 200,
                message: 'enquery status could not changed try again.',
                id: req?.params?.id,
            });
        }

    }
    catch (err) {
        return res.status(500).json({ status: 500, Error: err, message: 'Internal server Error !.' });

    }
}


exports.DeleteEnquery = (req, res, next) => {
    try {

    } catch (err) {
        return res.status(500).json({ status: 500, Error: err, message: 'Internal server Error !.' });
    }
}
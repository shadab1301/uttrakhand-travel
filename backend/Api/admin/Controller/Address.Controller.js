const date = require('date-and-time');
require("dotenv").config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const { validationResult } = require('express-validator');
const Address = require("../Model/Address.Model");


exports.AddAddress = async(req, res, next) => {
    try {
        const DataReq = { address, primary_number, alternate_number, email, WebUrl, map_location } = req.body;
        DataReq._id = new mongoose.Types.ObjectId()
        const address_res = await Address.create(DataReq);

        if (address_res) {
            return res.status(201).json({
                status: 201,
                _id: address_res._id,
                message: 'Address added.'
            });
        } else {
            return res.status(404).json({
                status: 404,
                message: 'Address  ot created. Please try again!'
            });
        }


    } catch (err) {
        return res.status(500).json({ status: 500, Error: err, message: 'Internal server Error !.' });

    }

}
exports.EditAddress = async (req, res, next) => {
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
            if (!req?.params?.id) return res.status(404).json({ status: 404 });
            const filter = { _id: req?.params?.id };
            const DataReq = { address, primary_number, alternate_number, email, WebUrl, map_location } = req.body;
            const updateAddRes = await Address.findOneAndUpdate(filter, DataReq, { upsert: true, returnDocument: 'after', returnOriginal: false, includeResultMetadata: true });
            // console.log(updateAddRes);
            if (updateAddRes) {
                return res.status(200).json({
                    status: 200,
                    message: 'address  updated successfully.',
                    id: req?.params?.id,
                });

            } else {
                return res.status(200).json({
                    status: 200,
                    message: 'address could not updated try again.',
                    id: req?.params?.id,
                });
            }
        }
    }
    catch (err) {
        return res.status(500).json({ status: 500, Error: err, message: 'Internal server Error !.' });

    }

}

exports.AddressList = async (req, res, next) => {
    try {
        let AddressRes = await Address.find().sort({ _id: -1 });

        if (AddressRes?.length > 0) {
            return res.status(200).json({
                status: 200,
                count: AddressRes?.length,
                data: AddressRes.map((data) => {
                    return {
                        id: data?._id,
                        address: data?.address,
                        primary_number: data?.primary_number,
                        alternate_number: data?.alternate_number,
                        email: data?.email,
                        WebUrl: data?.WebUrl,
                        map_location: data?.map_location,
                        updated_at: data?.updated_at
                    }
                }),
                message: 'Address list.'
            });

        } else {
            return res.status(200).json({
                status: 200,
                count: 0,
                data: [],
                message: 'Address list.'
            });
        }

    }
    catch (err) {
        return res.status(500).json({ status: 500, Error: err, message: 'Internal server Error !.' });

    }


}
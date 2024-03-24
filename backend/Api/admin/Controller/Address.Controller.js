const date = require('date-and-time');
require("dotenv").config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const { validationResult } = require('express-validator');
const Address = require("../Model/Address.Model");


exports.EditAddress = async (req, res, next) => {
    try { 

        
    }
    catch (err) {
        return res.status(500).json({ status: 500, Error: error, message: 'Internal server Error !.' });

    }

}

exports.AddressList = async (req, res, next) => {

    try { 


    }
    catch (err) {
        return res.status(500).json({ status: 500, Error: error, message: 'Internal server Error !.' });

    }


}
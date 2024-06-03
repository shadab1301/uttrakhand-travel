const date = require('date-and-time');
require("dotenv").config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const { validationResult } = require('express-validator');

const Admin = require("../Model/Admin.Model");

exports.SignUp = async (req, res, next) => {
    try {
        let validationError = validationResult(req);
        // console.log(validationError);
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
            // register admin
            const { username, email, password } = req.body;
            // console.log(username,email,password);
            // check user is already exist or not 
            const CheckEmail = await Admin.find({ email: email });
            if (CheckEmail.length > 0) {
                return res.status(409).json({
                    status: 409,
                    message: "Email already exist try another.",
                    email: email
                });
            }
            else {
                // cretae hash password
                const passwordHash = bcrypt.hashSync(password, 10);
                //create user
                const user = new Admin({
                    _id: new mongoose.Types.ObjectId(),
                    username: username,
                    email: email,
                    password: passwordHash,
                });

                console.log(user);
                const InsertRes = await user.save();
                // console.log(InsertRes); return false;
                if (InsertRes) {
                    return res.status(201).json({
                        status: 201,
                        message: "User register successfully.",
                        id: InsertRes._id,
                    });
                }

                else {
                    return res.status(404).json({
                        status: 404,
                        message: "User could not register.",
                        id: InsertRes._id,
                    });
                }
            }


        }


    }
    catch (err) {
        return res.status(500).json({
            status: 500,
            message: 'Internal server Error.',
            Error: err
        });
    }
}

exports.Login = async(req,res,next) =>{
try{

    let validationError = validationResult(req);
    // console.log(validationError);
    if (validationError?.errors?.length > 0) {
        return res.status(409).json({
           status: 400,
           data: validationError.errors.map((errorData) => {
              return {
                 'input': errorData.path,
                 'ErrorMsg': errorData.msg
              }
           }),
           message: 'Please provide the valid data.'
        });
    } else {
    // login here 
    const { password, email } = req.body;
  
    const CheckExistance = await Admin.find({ email: email });
    // console.log(CheckExistance); return false;
    if (CheckExistance?.length > 0) {
       // check password matching
       delete CheckExistance[0]?.password;
       const verified = bcrypt.compareSync(password, CheckExistance[0]?.password);
       if (verified == true) {
          const token = jwt.sign({
             id: CheckExistance[0]?._id,
             email: CheckExistance[0]?.email,
          }, process.env.JWT_KEY, { expiresIn: '8h' });
          //   console.log(token);
          return res.status(200).json({
             status: 200,
             message: 'LoggedIn Successfully !.',
             data: {
                id: CheckExistance[0]?._id,
                email: CheckExistance[0]?.email,
                username: CheckExistance[0]?.username,
                role:CheckExistance[0]?.role,
                isActive:CheckExistance[0]?.isActive,
             },
             token: token

          });
       } else {
          return res.status(401).json({
             status: 401,
             message: "Invalid password.",
             email: email
          });
       }
    } else {
       return res.status(401).json({
          status: 401,
          message: "Invalid Email.",
          email: email
       });
    }
 }

} catch(err) {
    return res.status(500).json({
        status: 500,
        message: 'Internal server Error.',
        Error: err
    });

}
}
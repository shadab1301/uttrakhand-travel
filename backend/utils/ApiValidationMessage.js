
const { validationResult } = require("express-validator");

exports.ApiValidationMessage=(req)=>{

    let validationError = validationResult(req);
    if (validationError.errors.length > 0) {
     const data=validationError.errors.map((errorData) => {
          return {
            input: errorData.path,
            ErrorMsg: errorData.msg,
          };
        })
        return data
    }else{
        return null
    }

}
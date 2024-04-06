const mongoose = require("mongoose");

var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const Enquery = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    feminine: {
        type:String,
        enum:["mr", "mrs","miss"],
        required: true,
    },
    first_name: {
        type:String,
        required: true,
    },
    last_name: {
        type:String,
        required: true,
    },
    mobile_number: {
        type: Number,
        required: true,
    },
    email: {
        type: String, require: true, trim: true,
        lowercase: true,
        // unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please provide a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address']
    },
    enquery_type: {
        type: String,
        required: true,

    },
    status: {
        type: String,
        enum: [0, 1, 2],  //0  for pending, 1 for in progress,  2 for completed
        default: 0,
        required: true,
    },
    message:{
        type:String,
        required:true
    }
},
    {
        timestamps: true,
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
            dateFormat: 'YYYY-MM-DD HH:mm:ss'
        }
    });

    module.exports = mongoose.model("enquery",Enquery);

const mongoose = require("mongoose");

var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const Address = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    address: { type: String, required: true },
    primary_number: { type: String, required: true },
    alternate_number: { type: String, required: false },
    email: {
        type: String, require: true, trim: true,
        lowercase: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please provide a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address']
    },
    WebUrl: { type: String, required: false, lowercase: true, trim: true },
    map_location: { type: String, required: true, trim: true }

}, {
    timestamps: true,
    timestamps: {
        createdAt: false,
        updatedAt: 'updated_at',
        dateFormat: 'YYYY-MM-DD HH:mm:ss'
    }
});

module.exports = mongoose.model('address',Address);
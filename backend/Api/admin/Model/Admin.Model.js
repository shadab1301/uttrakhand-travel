const mongoose = require("mongoose");
const AdminSchema = new mongoose.Schema({
_id:mongoose.Schema.Types.ObjectId,
username:{type:String,required:true},
email:{
    type:String,
    required:true,
    unique:true,
    lowercase: true,
    match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
},
password: { type: String, required: true },
role: {
    type: String,
    enum: ["superAdmin","Admin", "Employee"],
    required: true,
    default:"superAdmin"
  },
  isActive:{
    type: Boolean,
    default: true,
  },
});
module.exports = mongoose.model('Admin',AdminSchema);
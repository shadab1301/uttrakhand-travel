const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema(
  {
    feminine: {
      type: String,
    },
    fName: {
      type: String,
      required: [true, "fName should not be empty"],
    },
    lName: {
      type: String,
    },
    phoneNumber: {
      type: Number,
      required: [true, "lName should not be empty"],
    },
    email: {
      type: String,
    },
    status: {
      type: Boolean,
      enum: {
        values: [true, false],
        message:
          "{VALUE} is not supported for status. It should be true or false only",
      },
    },
  },
  { timestamps: true }
);


const Enquiry = new mongoose.Model("Enquiry", enquirySchema);

export default Enquiry
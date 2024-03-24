const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title shoud not be empty"],
    },
    description: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: [true, "image shoud not be empty"],
    },
  },
  { timestamps: true }
);
module.exports = new mongoose.model("Gallery", gallerySchema);

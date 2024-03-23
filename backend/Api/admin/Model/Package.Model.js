const mongoose = require("mongoose");

const packageModel = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title should not be empty"],
    },
    subTitle: {
      type: String,
      required: [true, "subTitle should not be empty"],
    },
    numbersOfDay: {
      type: String,
      required: [true, "numbersOfDay should not be empty"],
    },
    description: {
      type: String,
      required: [true, "description should not be empty"],
    },
    pkgImage: {
      type: String,
      required: [true, "pkgImage should not be empty"],
    },
  },
  { timestamps: true }
);

const Package = new mongoose.Model("Package", packageModel);

export default Package
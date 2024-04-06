const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema(
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
    include: {
      type: String,
      required: [true, "include should not be empty"],
    },
    description: {
      type: String,
      required: [true, "description should not be empty"],
    },
    pkgImage: {
      type: String,
      required: [true, "pkgImage should not be empty"],
    },
    isShowInHeader: {
      type: String,
      enum: [0, 1], //0  for false, 1 for in true
      default: 0,
    },
    isTopPackages: {
      type: String,
      enum: [0, 1], //0  for false, 1 for in true
      default: 0,
    },
    isRecommendPackages: {
      type: String,
      enum: [0, 1], //0  for false, 1 for in true
      default: 0,
    },
  },
  { timestamps: true }
);



const Package = new mongoose.model("Package", packageSchema);

module.exports = Package;


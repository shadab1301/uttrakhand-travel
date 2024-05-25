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
    BannerImage: {
      type: String,
      required: [true, "Banner Image should not be empty"],
    },
    isShowInHeader: {
      type: Boolean,
      enum: [true, false],
      default: false,
    },
    isTopPackages: {
      type: Boolean,
      enum: [true, false],
      default: false,
    },
    isRecommendPackages: {
      type: Boolean,
      enum: [true, false],
      default: false,
    },
    destination: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Destination",
      },
    ],
    destinationCover:{
      type: String,
      required: [true, "destinationCover should not be empty"],
    }
  },
  { timestamps: true }
);



const Package = new mongoose.model("Package", packageSchema);

module.exports = Package;


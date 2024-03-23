const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema(
  {
    cityName: {
      type: String,
      required: [true, "cityName shoud not be empty"],
    },
    cityImage: {
      type: String,
      required: [true, "cityImage should not be empty"],
    },
  },
  { timestamps: true }
);

const Destination = new mongoose.Model("Destination", destinationSchema);
export default Destination



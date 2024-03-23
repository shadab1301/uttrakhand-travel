import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title shoud not be empty"],
    },
    description: {
      type: String,
      required: [true, "description shoud not be empty"],
    },
    image: {
      type: String,
      required: [true, "image shoud not be empty"],
    },
  },
  { timestamps: true }
);


const Gallery=new mongoose.Model("Gallery",gallerySchema)
export default Gallery
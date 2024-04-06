const ApiError = require("../../../utils/ApiError");
const ApiResponse=require("../../../utils/ApiResponse")
const Gallery = require("../Model/Gallery.Model");

exports.createGallery = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    if (!title) {
      throw new ApiError(400, "title fields is required");
    }
    console.log(1)
    console.log(req.file);
    const filePath = `${process.env.IMAGE_BASE_PATH}/gallery/${req.file.filename}`;
    const alreadyExistedTitle = await Gallery.findOne({ title });
    const gallery = {
      title,
      description: description || "",
      image: filePath,
    };
 console.log(2);
    if (alreadyExistedTitle) {
      throw new ApiError(400, "Title already exist");
    }
    const createdGallery = await Gallery.create(gallery);
 console.log(3);
    if (!createdGallery) {
      throw new ApiError(
        500,
        "Something went wrong while creating the gallery."
      );
    }
     console.log(4);
    return res
      .status(200)
      .json(
        new ApiResponse(200, createdGallery, "Gallery created successfully.")
      );
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      status: 500,
      message: "Internal server Error......",
      Error: err,
    });
  }
};

exports.fetchGallery = async (req, res, next) => {
  try {
    let gallery;
    if(req.params.id){
  gallery = await Gallery.findOne({ _id: req.params.id });
    }else{
  gallery = await Gallery.find();
    }
   
  return res.status(200).json(new ApiResponse(201,gallery,"Gallery fetched successfully"))
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Internal server Error.",
      Error: err,
    });
  }
};

exports.updateGallery = async (req, res, next) => {
  try {
    const {id,title,description}=req.body
 
    if(!title){
      throw new ApiError(400,"title field is required")
    }

  const filePath = `${process.env.IMAGE_BASE_PATH}/gallery/${req.file.filename}`;
    const updatedDocument = await Gallery.findByIdAndUpdate(
      id,
      { $set: { title, description, image:filePath } },
      { new: true }
    ).select();
    return res.status(200).json(new ApiResponse(201, updatedDocument, "Data updated successfully"));
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Internal server Error.",
      Error: err,
    });

  }
};

exports.deleteGallery = async (req, res, next) => {
  try {
    const id=req.params.id
    const existedGallery=await Gallery.findOne({_id:id})
    if(!existedGallery){
      throw new ApiError("404","Gallery not exist")
    }
    const deletedGallery=await Gallery.deleteOne({_id:id})
    if(!deletedGallery){
      throw new ApiError(500,"Something went wrong while deleting gallery")
    }
    return res.status(200).json(new ApiResponse(201,{},"Gallery deleted successfully"))
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Internal server Error.",
      Error: err,
    });
  }
};

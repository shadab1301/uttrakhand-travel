const ApiError = require("../../../utils/ApiError");
const ApiResponse=require("../../../utils/ApiResponse")
const Gallery = require("../Model/Gallery.Model");

exports.createGallery = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    if (!title) {
      throw new ApiError(400, "title fields is required");
    }

    const filePath = `${process.env.IMAGE_BASE_PATH}/gallery/${req.file.filename}`;
    const alreadyExistedTitle = await Gallery.findOne({ title });
     if (alreadyExistedTitle) {
       throw new ApiError(400, "Title already exist");
     }
    const gallery = {
      title,
      description: description || " ",
      image: filePath,
    };
   
    const createdGallery = await Gallery.create(gallery);
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
    const {title,description}=req.body;
    const updateGall = req?.body;

    if(!title){
      throw new ApiError(400,"title field is required")
    }

    if(req?.file?.filename) {
      const filePath = `${process.env.IMAGE_BASE_PATH}/gallery/${req.file.filename}`;
      updateGall.image =filePath;
    }

    const updatedDocument = await Gallery.findByIdAndUpdate(
      { _id: req?.params?.id },
       updateGall,
      { new: true }
    ).select();
    if (!updatedDocument) { throw new ApiError(400, "Gallaery is not updated."); }
    return res.status(200).json(new ApiResponse(200, updatedDocument, "Gallaery updated successfully."));
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

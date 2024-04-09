const ApiError = require("../../../utils/ApiError");
const ApiResponse = require("../../../utils/ApiResponse");
const { ApiValidationMessage } = require("../../../utils/ApiValidationMessage");
const Destination = require("../Model/Destination.Model");

exports.createDestination = async (req, res, next) => {
  try {
    const { cityName, isIncludeInNavbar = false, isTopVisitPlace=false } = req.body;
    if(!cityName){
      throw new ApiError(400,"cityName should not be empty")
    }

  //  const isValidationError= ApiValidationMessage(req);
  //  if(isValidationError){
  //   throw new ApiResponse(409, isValidationError,"Please enter valid details");
  //  }

     const filePath = `${process.env.IMAGE_BASE_PATH}/destination/${req.file.filename}`;
     const destination = {
       cityName,
       isIncludeInNavbar,
       isTopVisitPlace,
       cityImage: filePath,
     };
     const createdDestination = await Destination.create(destination);
     if(!createdDestination){
      throw new ApiError(500,"Something went wrong while creating destination")
     }
    //  return res.status(200).json(201,createdDestination,"Destination created successfully")
      return res
        .status(200)
        .json(
          new ApiResponse(
            201,
            createdDestination,
            "Destination created successfully"
          )
        );
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Internal server Error.",
      Error: err,
    });
  }
};

exports.fetchDestination = async (req, res, next) => {
  try {
    const destinations=await Destination.find()
  
    if (!destinations) {
      throw new ApiError(500,"Something went wrong while fetching destinations")
    }
    // return res.status(200).json(201,destinations,"Data fetched successfully")
    return res.status(200).json(new ApiResponse(200,destinations,destinations.length?"Data fetch successfully":"No data found"))
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Internal server Error.",
      Error: err,
    });
  }
};

exports.updateDestination = async (req, res, next) => {
  try {
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Internal server Error.",
      Error: err,
    });
  }
};

exports.deleteDestination = async (req, res, next) => {
  try {
     const id = req.params.id;
     const existedDestination = await Destination.findOne({ _id: id });
     if (!existedDestination) {
       throw new ApiError("404", "Destination not exist");
     }
     const deletedDestination = await Destination.deleteOne({ _id: id });
     if (!deletedDestination) {
       throw new ApiError(
         500,
         "Something went wrong while deleting Destination"
       );
     }
     return res
       .status(200)
       .json(new ApiResponse(201, {}, "Destination deleted successfully"));

  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Internal server Error.",
      Error: err,
    });
  }
};

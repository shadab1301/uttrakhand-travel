const ApiError = require("../../../utils/ApiError");
const ApiResponse = require("../../../utils/ApiResponse");
const Package = require("../Model/Package.Model");

exports.createPackage = async (req, res, next) => {
  try {
    const { title, subTitle, numbersOfDay, description } = req.body;
    if (
      [title, subTitle, numbersOfDay, description].some(
        (val) => val?.trim() === ""
      )
    ) {
      throw new ApiError("400", "All field are required.");
    }



    const filePath = `${process.env.IMAGE_BASE_PATH}/packages/${req.file.filename}`;
    const package = {
     title: title || "default",
     subTitle: subTitle ||  "default",
      numbersOfDay: numbersOfDay|| "default",
      description: description|| "default",
       pkgImage: filePath,
    };
    
  
    const createdPackage = await Package.create(package);

    if(!createdPackage){
      throw new ApiError(500,"Something went wrong while creating new packages.")
    }
     return res
       .status(200)
       .json(
         new ApiResponse(200, createdPackage, "Package created successfully.")
       );

  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Internal server Error.",
      Error: err.message,
    });
  }
};

exports.fetchPackages = async (req, res, next) => {
  try {
     let package;
     if (req.params.id) {
       package = await Package.findOne({ _id: req.params.id });
     } else {
       package = await Package.find();
     }

     return res
       .status(200)
       .json(new ApiResponse(201, package, "Package fetched successfully"));
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Internal server Error.",
      Error: err,
    });
  }
};

exports.updatePackage = async (req, res, next) => {
  try {
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Internal server Error.",
      Error: err,
    });
  }
};

exports.deletePackage = async (req, res, next) => {
  try {
     const id = req.params.id;
     const existedPackage = await Package.findOne({ _id: id });
     if (!existedPackage) {
       throw new ApiError("404", "Package not exist");
     }
     const deletedPackage = await Package.deleteOne({ _id: id });
     if (!deletedPackage) {
       throw new ApiError(500, "Something went wrong while deleting Package");
     }
     return res
       .status(200)
       .json(new ApiResponse(201, {}, "Package deleted successfully"));
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Internal server Error.",
      Error: err,
    });
  }
};

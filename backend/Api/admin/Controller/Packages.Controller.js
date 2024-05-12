const ApiError = require("../../../utils/ApiError");
const ApiResponse = require("../../../utils/ApiResponse");
const { ApiValidationMessage } = require("../../../utils/ApiValidationMessage");
const Package = require("../Model/Package.Model");

exports.createPackage = async (req, res, next) => {
  try {
    const {
      title,
      subTitle,
      numbersOfDay,
      description,
      isRecommendPackages,
      isTopPackages,
      isShowInHeader,
      include,
    } = req.body;

    // isRecommendPackages;isTopPackages;isShowInHeader;include
    // if (
    //   [title, subTitle, numbersOfDay, description].some(
    //     (val) => val?.trim() === ""
    //   )
    // ) {
    //   throw new ApiError("400", "All field are required.");
    // }
    //  const isValidationError = ApiValidationMessage(req);
    //   if (isValidationError) {
    //     throw new ApiResponse(
    //       409,
    //       isValidationError,
    //       "Please enter valid details"
    //     );
    //   }


    const { pkgImage, BannerImage } = req.files;


    const BannerImgPath = `${process.env.IMAGE_BASE_PATH}/packages/${BannerImage[0].filename}`;
    const pkgImagePath = `${process.env.IMAGE_BASE_PATH}/packages/${pkgImage[0].filename}`;


    // BannerImage;
    const package = {
      title: title || "default",
      subTitle: subTitle || "default",
      numbersOfDay: numbersOfDay || "default",
      description: description || "default",
      isRecommendPackages: isRecommendPackages ? true :false,
      isTopPackages: isTopPackages ? true :false,
      isShowInHeader: isShowInHeader ? true:false,
      include: include,
      pkgImage: pkgImagePath,
      BannerImage: BannerImgPath,
    };

    const createdPackage = await Package.create(package);

    if (!createdPackage) {
      throw new ApiError(
        500,
        "Something went wrong while creating new packages."
      );
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
    const pkg = req?.body;
    if (req?.files?.pkgImage != undefined) {
      const pkgImagePath = `${process.env.IMAGE_BASE_PATH}/packages/${req?.files?.pkgImage[0].filename}`;
      pkg.pkgImage = pkgImagePath;
    }

    if (req?.files?.BannerImage != undefined) {
      const BannerImagePath = `${process.env.IMAGE_BASE_PATH}/packages/${req?.files?.BannerImage[0].filename}`;
      pkg.BannerImage = BannerImagePath;
    }
    const PackageUpdate = await Package.findByIdAndUpdate(
      { _id: req?.params?.id },
      pkg,
      { new: true },
    ).select();
    return res.status(200).json(new ApiResponse(200, PackageUpdate, "Data updated successfully."));
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

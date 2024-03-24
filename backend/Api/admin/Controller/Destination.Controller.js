const ApiError = require("../../../utils/ApiError");

exports.createDestination = async (req, res, next) => {
  try {
    const { cityName, isIncludeInNavbar = false, isTopVisitPlace=false } = req.body;
    if(!cityName){
      throw new ApiError(400,"cityName should not be empty")
    }
    console.log(req)
    return false
    //  const filePath = `${process.env.IMAGE_BASE_PATH}/destination/${req.file.filename}`;
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
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Internal server Error.",
      Error: err,
    });
  }
};

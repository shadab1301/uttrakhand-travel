const addDestination = async (req, res, next) => {
  try {
    const { title, description } = req.body;
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Internal server Error.",
      Error: err,
    });
  }
};

const fetchDestination = async (req, res, next) => {
  try {
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Internal server Error.",
      Error: err,
    });
  }
};
const fetchDestinationById = async (req, res, next) => {
  try {
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Internal server Error.",
      Error: err,
    });
  }
};
const updateDestination = async (req, res, next) => {
  try {
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Internal server Error.",
      Error: err,
    });
  }
};

const deleteDestination = async (req, res, next) => {
  try {
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Internal server Error.",
      Error: err,
    });
  }
};

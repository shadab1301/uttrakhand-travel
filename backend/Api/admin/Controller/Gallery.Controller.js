


const addGallery=async(req,res,next)=>{
     try {
      const { title, description } = req.body;
     } catch (err) {
       return res.status(500).json({
         status: 500,
         message: "Internal server Error.",
         Error: err,
       });
     }
}

const fetchGallery = async (req, res, next) => {
  try {
  
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Internal server Error.",
      Error: err,
    });
  }
};
const fetchGalleryById = async (req, res, next) => {
  try {
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Internal server Error.",
      Error: err,
    });
  }
};
const updateGallery= async (req, res, next) => {
  try {
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Internal server Error.",
      Error: err,
    });
  }
};

const deleteGallery = async (req, res, next) => {
  try {
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Internal server Error.",
      Error: err,
    });
  }
};
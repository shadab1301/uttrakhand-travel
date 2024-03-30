const multer = require("multer");



exports.uploadFile = (folderName) => {
  multer({ dest: `./public/${folderName}` });


function fileFilter(req, file, cb) {
  // let arr =
  //   folderName === "gallery"
  //     ? ["jpg", "png", "jpeg", "mp4"]
  //     : ["jpg", "png", "jpeg"];

  // if (!arr.includes(file)) {
  //   cb(null, false);
  // } else {
  //   cb(null, true);
  // }
  // You can always pass an error if something goes wrong:
  // cb(new Error("I don't have a clue!"));
}

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./public/${folderName}`);
    },
    filename: function (req, file, cb) {
      // console.log({file:file.originalname})
      // return false
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9+ '_' + file.replace(/ /g,''));
      cb(null, file.fieldname + "-" + uniqueSuffix);
    },
  });
  const upload = multer({
    storage: storage,
    // fileFilter,
    // limit: { fileSize: 1024 * 1024 * 5 },
  });
  return upload;
};

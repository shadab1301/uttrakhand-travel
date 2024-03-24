const multer = require('multer');
exports.UploadFiles = (url) =>{
    multer({ dest: "./public/"+url});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/webp') {
        cb(null, true);
    } else {
        cb(null, false);
        console.log(`file Extension could not supportable. only support extension(.jpge, .png , .jpg)`);
    }
}
const storage = multer.diskStorage({
    destination: function (req, file, cb) { cb(null, './public/' + url); },
    filename: function (req, file, cb) { cb(null, new Date() / 10 + '_' + file.originalname); }
});
const upload = multer({ storage: storage, limits: { fileSize: 1024 * 1024 * 5 }, fileFilter: fileFilter, });
return upload;
}

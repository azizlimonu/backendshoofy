const multer = require("multer");
const path = require("path");

const storage = multer.memoryStorage(); // Store file in memory

const uploader = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const supportedImage = /png|jpg|jpeg|webp/;
    const extension = path.extname(file.originalname);

    if (supportedImage.test(extension)) {
      cb(null, true);
    } else {
      cb(new Error("Must be a png/jpg/jpeg/webp image"));
    }
  },
  limits: {
    fileSize: 1000000,
  }
});

module.exports = uploader;
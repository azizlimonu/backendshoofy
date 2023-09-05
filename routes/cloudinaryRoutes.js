const express = require('express');
const router = express.Router();
const uploader = require('../middleware/uploader');
const {
  addMultipleImageCloudinary,
  saveImageCloudinary,
  cloudinaryDeleteController,
} = require('../controllers/cloudinaryController');

router.post(
  '/add-img',
  uploader.single('image'),
  saveImageCloudinary
);

router.post(
  '/add-multiple-img',
  uploader.array('images', 5),
  addMultipleImageCloudinary
);

router.delete('/img-delete', cloudinaryDeleteController);

module.exports = router;

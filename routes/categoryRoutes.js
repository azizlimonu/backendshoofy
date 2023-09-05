const express = require('express');
const router = express.Router();
// internal
const {
  getSingleCategory,
  addCategory,
  addAllCategory,
  getAllCategory,
  getProductTypeCategory,
  getShowCategory,
  deleteCategory,
  updateCategory,
} = require('../controllers/categoryController');

router.get('/get/:id', getSingleCategory);

router.post('/add', addCategory);

router.post('/add-all', addAllCategory);

router.get('/all', getAllCategory);

router.get('/show/:type', getProductTypeCategory);

router.get('/show', getShowCategory);

router.delete('/delete/:id', deleteCategory);

router.patch('/edit/:id', updateCategory);

module.exports = router;
const express = require('express');
const router = express.Router();

const {
  addBrand,
  addAllBrand,
  getActiveBrands,
  getAllBrands,
  deleteBrand,
  getSingleBrand,
  updateBrand
} = require('../controllers/brandController');

router.post('/add', addBrand);

router.post('/add-all', addAllBrand);

router.get('/active', getActiveBrands);

router.get('/all', getAllBrands);

router.delete('/delete/:id', deleteBrand);

router.get('/get/:id', getSingleBrand);

router.patch('/edit/:id', updateBrand);

module.exports = router;
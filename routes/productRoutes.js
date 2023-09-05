const express = require('express');
const router = express.Router();

const {
  addProduct,
  addAllProducts,
  getAllProducts,
  getOfferTimerProducts,
  getTopRatedProducts,
  reviewProducts,
  getPopularProductByType,
  getRelatedProducts,
  getSingleProduct,
  stockOutProducts,
  updateProduct,
  getProductsByType,
  deleteProduct
} = require('../controllers/productController');

// Route => api/product/...

router.post('/add', addProduct);

router.post('/add-all', addAllProducts);

router.get('/all', getAllProducts);

router.get('/offer', getOfferTimerProducts);

router.get('/top-rated', getTopRatedProducts);

router.get('/review-product', reviewProducts);

router.get('/popular/:type', getPopularProductByType);

router.get('/related-product/:id', getRelatedProducts);

router.get("/single-product/:id", getSingleProduct);

router.get("/stock-out", stockOutProducts);

router.patch("/edit-product/:id", updateProduct);

router.get('/:type', getProductsByType);

router.delete('/:id', deleteProduct);

module.exports = router;
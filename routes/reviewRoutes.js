const express = require('express');
const router = express.Router();

const {
  addReview,
  deleteReviews
} = require("../controllers/reviewController");

// Route => /api/review/...
router.post('/add', addReview);

router.delete('/delete/:id', deleteReviews);
module.exports = router;
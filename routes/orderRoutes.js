const express = require('express');
const router = express.Router();

const {
  getOrders,
  getSingleOrder,
  paymentIntent,
  addOrder,
  updateOrderStatus,
} = require('../controllers/orderController');

// Route => api/order/...

router.get("/orders", getOrders);

router.get("/:id", getSingleOrder);

router.post("/create-payment-intent", paymentIntent);

router.post("/saveOrder", addOrder);

router.patch("/update-status/:id", updateOrderStatus);

module.exports = router;
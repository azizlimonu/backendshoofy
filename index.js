require("dotenv").config();
const express = require("express");
const app = express();
const path = require('path');
const cors = require("cors");
const connectDB = require("./config/db");
const { secret } = require("./config/secret");
const PORT = secret.port || 7000;
const morgan = require('morgan')
const globalErrorHandler = require("./errors/globalError");

// routes
const adminRoutes = require('./routes/adminRoutes');
const brandRoutes = require('./routes/brandRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const cloudinaryRoutes = require('./routes/cloudinaryRoutes');
const couponRoutes = require('./routes/couponRoutes');
const orderRoutes = require('./routes/orderRoutes');
const productRoutes = require('./routes/productRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const userRoutes = require('./routes/userRoutes');
const adminDashboardRoutes = require('./routes/adminDashboardRoutes');
const userOrderRoutes = require('./routes/userOrderRoutes');

// Cors
// const allowedOrigins = [process.env.ADMIN_URL, process.env.STORE_URL]
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (allowedOrigins.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

// app.use(cors(corsOptions));

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// connect database
connectDB();

// root route
app.get("/", (req, res) => res.send("Api successfully"));

app.use('/api/admin', adminRoutes);
app.use('/api/brand', brandRoutes);
app.use('/api/categoryRoutes', categoryRoutes);
app.use('/api/cloudinary', cloudinaryRoutes);
app.use('/api/coupon', couponRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/product', productRoutes);
app.use('/api/review', reviewRoutes);
app.use('/api/user', userRoutes);
app.use('/api/dashboard', adminDashboardRoutes);
app.use('/api/user-order', userOrderRoutes);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));

// global error handler
app.use(globalErrorHandler);
//* handle not found
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

module.exports = app;

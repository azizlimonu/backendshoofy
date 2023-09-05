const Coupon = require('../model/Coupon');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

exports.addCoupon = async (req, res, next) => {
  try {
    const newCoupon = new Coupon(req.body);
    if (!newCoupon.startTime) {
      newCoupon.startTime = new Date()
    }
    await newCoupon.save();
    res.send({ message: 'Coupon Added Successfully!' });
  } catch (error) {
    next(error)
  }
};

exports.addAllCoupon = async (req, res, next) => {
  try {
    await Coupon.deleteMany();
    await Coupon.insertMany(req.body);
    res.status(200).send({
      message: 'Coupon Added successfully!',
    });
  } catch (error) {
    next(error)
  }
};

exports.getAllCoupons = async (req, res, next) => {
  try {
    const coupons = await Coupon.find({}).sort({ _id: -1 });
    res.send(coupons);
  } catch (error) {
    next(error)
  }
};

exports.getCouponById = async (req, res, next) => {
  try {
    const coupon = await Coupon.findById(req.params.id);
    res.send(coupon);
  } catch (error) {
    next(error)
  }
};

exports.updateCoupon = async (req, res, next) => {
  try {
    const coupon = await Coupon.findById(req.params.id);
    if (coupon) {
      coupon.title = req.body.title;
      coupon.couponCode = req.body.couponCode;
      coupon.endTime = dayjs().utc().format(req.body.endTime);
      coupon.discountPercentage = req.body.discountPercentage;
      coupon.minimumAmount = req.body.minimumAmount;
      coupon.productType = req.body.productType;

      await coupon.save();

      res.send({ message: 'Coupon Updated Successfully!' });
    }
  } catch (error) {
    next(error)
  }
};

exports.deleteCoupon = async (req, res, next) => {
  try {
    await Coupon.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: 'Coupon delete successfully',
    })
  } catch (error) {
    next(error)
  }
};
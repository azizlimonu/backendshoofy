const express = require('express');
const router = express.Router();

const {
  registerAdmin,
  loginAdmin,
  forgetPassword,
  confirmAdminForgetPass,
  changePassword,
  addStaff,
  getAllStaff,
  getStaffById,
  updateStaff,
  deleteStaff,
  updatedStatus,
} = require("../controllers/adminController");

// Route => /api/admin/ ...

router.post("/register", registerAdmin);

router.post("/login", loginAdmin);

router.patch("/change-password", changePassword);

router.post("/add", addStaff);

router.get("/all", getAllStaff);

router.patch("/forget-password", forgetPassword);

router.patch("/confirm-forget-password", confirmAdminForgetPass);

router.get("/get/:id", getStaffById);

router.patch("/update-stuff/:id", updateStaff);

router.put("/update-status/:id", updatedStatus);

router.delete("/:id", deleteStaff);

module.exports = router;
const express = require("express");
const {
  createUser,
  adminLogin,
  othersLogin,
  refreshToken,
  editRole,
  getAllRole,
  deleteRole,
  getSearchRole,
} = require("./user.controller");

const router = express.Router();

router.post("/create-user", createUser);
router.post("/admin-login", adminLogin);
router.post("/others-login", othersLogin);
router.post("/refresh-token", refreshToken);
router.post("/edit-role", editRole);
router.get("/role/all", getAllRole);
router.delete("/delete-role", deleteRole);
router.get("/searchRole/:email", getSearchRole);

module.exports = router;

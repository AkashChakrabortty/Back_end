const express = require("express");
const {
  createService,
  getAllServices,
  getSingleService,
  updateService,
  deleteService,
} = require("./service.controller");
const router = express.Router();

router.post("/create-service", createService);
router.get("/", getAllServices);
router.get("/:id", getSingleService);
router.patch("/:id", updateService);
router.delete("/:id", deleteService);

module.exports = router;

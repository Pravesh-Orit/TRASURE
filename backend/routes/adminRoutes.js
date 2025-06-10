const express = require("express");
const router = express.Router();
const controller = require("../controllers/adminController");
const authenticate = require("../middleware/authenticate");
const authorize = require("../middleware/authorize");

router.get(
  "/users",
  authenticate,
  authorize(["admin"]),
  controller.getAllUsers
);
router.get(
  "/mechanics",
  authenticate,
  authorize(["admin"]),
  controller.getAllMechanics
);
router.put(
  "/provider/:id/approve",
  authenticate,
  authorize(["admin"]),
  controller.approveProvider
);
router.get(
  "/providers",
  authenticate,
  authorize(["admin"]),
  controller.getAllProviders
);

module.exports = router;

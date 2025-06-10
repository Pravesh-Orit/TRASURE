const express = require("express");
const router = express.Router();
const controller = require("../controllers/mechanicController");
const authenticate = require("../middleware/authenticate");

router.post("/", authenticate, controller.addMechanic);
router.get("/", authenticate, controller.getMechanics);
router.get("/:id", authenticate, controller.getMechanicById);
router.put("/:id", authenticate, controller.updateMechanic);
router.delete("/:id", authenticate, controller.deleteMechanic);

module.exports = router;

const express = require("express");
const router = express.Router();
const controller = require("../controllers/providerController");
const authenticate = require("../middleware/authenticate");

router.post("/onboarding", authenticate, controller.onboarding);
router.get("/status", authenticate, controller.status);
router.get("/:id", authenticate, controller.getProviderById);
router.put("/:id", authenticate, controller.updateProvider);
module.exports = router;

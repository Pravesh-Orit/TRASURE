const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const errorHandler = require("./middleware/errorHandler");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"], // Add OPTIONS!
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(morgan("dev"));

// Load all route files
const routeModules = [
  "authRoutes",
  "userRoutes",
  "vehiclesRoutes",
  "bnplRoutes",
  "fleetRoutes",
  "serviceRoutes",
  "appointmentRoutes",
  "paymentRoutes",
  "notificationRoutes",
  "chatRoutes",
  "trackingRoutes",
  "providerRoutes",
  "mechanicRoutes",
  "inventoryRoutes",
  "assignmentRoutes",
  "slaRoutes",
  "payoutRoutes",
  "offerRoutes",
  "tierPlanRoutes",
  "adminRoutes",
  "auditLogRoutes",
  "subscriptionRoutes",
  "invoiceRoutes",
  "disputeRoutes",
  "promotionRoutes",
  "analyticsRoutes",
  "reconciliationRoutes",
];
const documentRoutes = require("./routes/documentRoutes");
app.use("/api/documents", documentRoutes);
routeModules.forEach((route) => {
  if (
    !route ||
    typeof route !== "string" ||
    !route.endsWith("Routes") ||
    route.replace("Routes", "").trim() === ""
  ) {
    console.warn("Skipping invalid route module:", route);
    return;
  }

  const routePath = `/api/${route.replace("Routes", "").toLowerCase()}`;

  console.log("Mounting route:", routePath);

  try {
    const routeHandler = require(`./routes/${route}`);
    app.use(routePath, routeHandler);
  } catch (err) {
    console.error(`❌ Failed to load route ${route}:`, err.message);
  }
});

app.use(errorHandler);

module.exports = app;

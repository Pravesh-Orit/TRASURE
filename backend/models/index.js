<<<<<<< HEAD
const Sequelize = require("sequelize");
const config = require("../config/config");
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: "postgres",
    logging: false,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./user")(sequelize, Sequelize);
db.Vehicle = require("./vehicle")(sequelize, Sequelize);
db.Appointment = require("./appointment")(sequelize, Sequelize);
db.ServiceRequest = require("./serviceRequest")(sequelize, Sequelize);
db.Payment = require("./payment")(sequelize, Sequelize);
db.Chat = require("./chat")(sequelize, Sequelize);
db.Notification = require("./notification")(sequelize, Sequelize);
db.BNPLRequest = require("./bnplRequest")(sequelize, Sequelize);
db.Provider = require("./provider")(sequelize, Sequelize);
db.Mechanic = require("./mechanic")(sequelize, Sequelize);
db.Inventory = require("./inventory")(sequelize, Sequelize);
db.Assignment = require("./assignment")(sequelize, Sequelize);
db.SLALog = require("./slaLog")(sequelize, Sequelize);
db.Payout = require("./payout")(sequelize, Sequelize);
db.Offer = require("./offer")(sequelize, Sequelize);
db.TierPlan = require("./tierPlan")(sequelize, Sequelize);
db.AdminUser = require("./adminUser")(sequelize, Sequelize);
db.AuditLog = require("./auditLog")(sequelize, Sequelize);
db.SubscriptionPlan = require("./subscriptionPlan")(sequelize, Sequelize);
db.Dispute = require("./dispute")(sequelize, Sequelize);
db.Promotion = require("./promotion")(sequelize, Sequelize);
db.DynamicPricingRule = require("./dynamicPricingRule")(sequelize, Sequelize);
db.Ticket = require("./ticket")(sequelize, Sequelize);
db.CrossSellAd = require("./crossSellAd")(sequelize, Sequelize);
db.AnalyticsRecord = require("./analyticsRecord")(sequelize, Sequelize);
db.Invoice = require("./invoice")(sequelize, Sequelize);

// Define associations below
db.User.hasMany(db.Vehicle);
db.Vehicle.belongsTo(db.User);
db.User.hasMany(db.ServiceRequest);
db.ServiceRequest.belongsTo(db.User);
db.ServiceRequest.hasOne(db.Appointment);
db.Appointment.belongsTo(db.ServiceRequest);
db.User.hasMany(db.Payment);
db.Payment.belongsTo(db.User);

module.exports = db;
=======
// Sequelize initialization and associations
>>>>>>> 4c8c205 (backend module structure and config implementation)

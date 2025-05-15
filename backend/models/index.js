const Sequelize = require("sequelize");
const sequelize = require("../config/database");

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
db.User.hasMany(db.Vehicle, { foreignKey: "userId" });
db.Vehicle.belongsTo(db.User, { foreignKey: "userId" });
db.User.hasMany(db.ServiceRequest, { foreignKey: "userId" });
db.ServiceRequest.belongsTo(db.User, { foreignKey: "userId" });
db.ServiceRequest.hasOne(db.Appointment, { foreignKey: "serviceRequestId" });
db.Appointment.belongsTo(db.ServiceRequest, { foreignKey: "serviceRequestId" });
db.User.hasMany(db.Payment, { foreignKey: "userId" });
db.Payment.belongsTo(db.User, { foreignKey: "userId" });

module.exports = db;

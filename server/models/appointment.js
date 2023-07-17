const sequelize = require("../util/database");
const Sequelize = require("sequelize");
const appointment = sequelize.define("appointment", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false },
  phone: { type: Sequelize.STRING, allowNull: false },
});

module.exports = appointment;

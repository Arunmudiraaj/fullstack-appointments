const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("appointments", "root", "lonewarrior70951", {
  dialect: "mysql",
  host: "localhost",
});
module.exports = sequelize;

const express = require("express");
const app = express();
const appointmentRoutes = require("./routes/appointments");
const sequelize = require("./util/database");
const cors = require("cors");
//requests
app.use(cors());
sequelize.sync();
app.use(express.json());
app.use("/appointments", appointmentRoutes);

app.listen(8080);

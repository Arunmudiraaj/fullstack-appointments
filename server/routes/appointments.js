const express = require("express");
const routes = express.Router();
const appointmentControllers = require("../controllers/appointments");
routes.get("/all", appointmentControllers.getAllAppointments);
routes.post("/add-appointment", appointmentControllers.addAppointment);
routes.post("/del/:id", appointmentControllers.deleteAppointment);

module.exports = routes;

const appointment = require("../models/appointment");

exports.getAllAppointments = (req, res) => {
  // res.send(`<h2>hai</h2>`);
  appointment.findAll().then((data) => {
    res.json(data);
  });
};

exports.addAppointment = (req, res) => {
  const { name, phone, email } = req.body;
  appointment
    .create({
      name: name,
      phone: phone,
      email: email,
    })
    .then((data) => {
      console.log(data.dataValues);
      res.json(data.dataValues);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteAppointment = (req, res) => {
  const id = req.params.id;
  appointment
    .findByPk(id)
    .then((item) => item.destroy())
    .then(() => {
      res.json({ status: "done deleting" });
    })
    .catch((err) => {
      console.log(err);
    });
};

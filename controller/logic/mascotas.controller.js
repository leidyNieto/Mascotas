/* Dto */
const mascotasdto = require("../../model/dto/mascotas.dto");
const config = require("config");

/* Helper */
const notificationHelper = require("../helpers/notification.helper");

exports.createMascotas = async (req, res, next) => {
  try {
    const mascotas = {
      especie: req.body.especie,
      raza: req.body.raza,
      edad: req.body.edad,
      propietario: req.body.propietario,
      nombre: req.body.nombre,
      esterilizado: req.body.esterilizado,
      sexo: req.body.sexo,
      color: req.body.color,
      fecha_nacimiento: req.body.fecha_nacimiento,
      vacunado: req.body.vacunado,
      peso: req.body.peso,
      numero_dueño: req.body.numero_dueño,
    };

    // Llama a mascotasdto.create y espera a que se complete
    const data = await mascotasdto.create(mascotas);

    // Luego de que los datos se guarden correctamente, envía la respuesta
    // Envía los datos en la respuesta con el código 201 (Creado)
    res.status(201).json({ info: data });

    notificationHelper.sendSMS(mascotas.numero_dueño);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateMascotas = async (req, res, next) => {
  try {
    const mascotas = {
      especie: req.body.especie,
      raza: req.body.raza,
      edad: req.body.edad,
      propietario: req.body.propietario,
      nombre: req.body.nombre,
      esterilizado: req.body.esterilizado,
      sexo: req.body.sexo,
      color: req.body.color,
      fecha_nacimiento: req.body.fecha_nacimiento,
      vacunas: req.body.vacunas,
      peso: req.body.peso,
      numero_dueño: req.body.numero_dueño,
    };

    const data = await mascotasdto.update({ _id: req.body.id }, mascotas);
    res.status(201).json({ info: data });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const data = await mascotasdto.getAll({});
    console.log("entro",data)
    res.status(200).json({ info: data });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

exports.getByCode = async (req, res, next) => {
  try {
    const data = await mascotasdto.getByCode({ code: req.params.code });
    res.status(200).json({ info: data });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

exports.deleteMascotas = async (req, res, next) => {
  try {
    await mascotasdto.delete({ _id: req.body.id });
    res.status(204).json();
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

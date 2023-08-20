/* Dto */
const mascotasdto = require("../../model/dto/mascotas.dto");

/* Helper */
const helper = require("../helpers/general.helper")

exports.createMascotas = (req,res,next) => {
  let mascotas = {
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
    peso: req.body.peso
  };
  
  mascotasDto.save(mascotas, (err, data)=>{
    if(err){
        return res.status(400).json(
          {
            error: err
          }
        );
    }
    res.status(201).json(
        {
          info: data
        }
    );
  }); 
};

exports.updateMascotas = (req ,res , next) => {
    let mascotas = {
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
      peso: req.body.peso 
    };

    mascotasdto.update({_id: req.body.id }, mascotas, (err, data) =>{
      if(err){
          return res.status(400).json(
            {
              error: err
            }
          );
      }
        res.status(201).json(
            {
                info: data
            }
        );
    }); 
  };

exports.getAll = (req ,res ,next) => {

  mascotasdto.getAll({}, (err,data)=>{
    if(err){
        return res.status(400).json(
          {
            error: err
          }
        );
    }
    res.status(200).json(
          {
             info: data
          }
    );
  }); 
};

exports.getByCode = (req,res,next) => {

  mascotasdto.getByCode({code: req.params.code}, (err,data)=>{
    if(err){
        return res.status(400).json(
          {
            error: err
          }
        );
    }
    res.status(200).json(
          {
              info: data
          }
    );
  });
};

exports.deleteMascotas = () => {

  mascotasdto.delete({_id: req.body.id}, (err, data)=>{
      if(err){
        return res.status(400).json(
          {
            error: err
          }
        );
      }
      res.status(204).json();
  });  
}

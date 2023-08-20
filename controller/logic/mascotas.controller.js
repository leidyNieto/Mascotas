/* Dto */
const mascotasdto = require("../../model/dto/mascotas.dto");
const mascotadto = require("../../model/dto/mascota.dto");

/* Helper */
const helper = require("../helpers/general.helper")


exports.createMascotas = (req,res,next) => {
  let masc = {
    especie: req.body.especie,
    raza: req.body.raza,
    // edad: req.body.edad, 
    propietario: req.body.propietario,
    nombre: req.body.nombre,
    // esterilizado: req.body.esterilizado,
    sexo: req.body.sexo,
    color: req.body.color,
    // fecha_nacimiento: req.body.fecha_nacimiento, 
    // vacunas: req.body.vacunas,
    // peso: req.body.peso
    
  };
  mascotasdto.save(masc,(err,data)=>{
    if(err){
        return res.status(400).json({
            error: err
        });
    }
    let mascota = {
        nombre: masc.nombre,
        especie: masc.especie,
        raza: masc.raza,
        sexo: masc.sexo,
        password: helper.encryptedPassword(req.body.password)
    }
    mascotadto.save(mascota,(err, m)=>{
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
  }); 
};

exports.updateMascotas = (req,res,next) => {
    let masc = {
      especie: req.body.especie,
      raza: req.body.raza,
      // edad: req.body.edad, 
      propietario: req.body.propietario,
      nombre: req.body.nombre,
      // esterilizado: req.body.esterilizado,
      sexo: req.body.sexo,
      color: req.body.color,
      // fecha_nacimiento: req.body.fecha_nacimiento, 
      // vacunas: req.body.vacunas,
      // peso: req.body.peso
      
    };
    mascotasdto.update({_id: req.body.id }, masc,(err,data)=>{
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

  exports.getAll = (req,res,next) => {
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
    mascotasdto.delete({_id: req.body.id}, (err,data)=>{
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

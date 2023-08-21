const controller = require("../controller/logic/mascotas.controller");

module.exports = (app) =>{
    
    app.get("/mascotas", (req, res, next) =>{
        controller.getAll(req, res, next);
    });

    app.get("/mascotas/bycode/:code", (req, res, next) =>{
        controller.getByCode(req, res, next);
    });

    app.post("/mascotas", (req, res, next) =>{
        controller.createMascotas(req, res, next);
    });

    app.put("/mascotas", (req, res, next) =>{
        controller.updateMascotas(req, res, next);
    });

    app.delete("/mascotas", (req, res, next) =>{
        controller.deleteMascotas(req, res, next);
    });

}

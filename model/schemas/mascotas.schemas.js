/**Packages */

const mongoose = require("mongoose");

/**Schema creation */

const mascotasSchema = new mongoose.Schema({
    especie:{
        type: "String",
        required: true
    },

    raza:{
        type: "String",
        required: true
    },

    edad:{
        type: "Number",
        required: true
    },

    propietario:{
        type: "String",
        required: true
    },

    nombre:{
        type: "String",
        required: true
    },

    estelirizado:{
        type: "Boolean",
        required: true
    },

    sexo:{
        type: "String",
        required: true
    },

    fecha_nacimiento:{
        type: "Date",
        required: true
    },

    vacunado:{
        type: "Boolean",
        required: true
    },

    peso:{
        type: "Number",
        required: true
    }
});

module.exports = mascotasSchema;
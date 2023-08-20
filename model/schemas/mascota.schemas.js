/**Packages */

const mongoose = require("mongoose");

/**Schema creation */

const mascotasSchema = new mongoose.Schema({
    nombre:{
        type: "String",
        required: true
    },

    epecie:{
        type: "String",
        required: true
    },

    raza:{
        type: "String",
        required: true
    },

    sexo:{
        type: "String",
        required: true
    },
    
    password:{
        type: "String",
        required: true
    }
});

module.exports = mascotasSchema;
const mongoose = require("mongoose");

const camposSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
        minLength: 3,
        maxLength: 300,
    },
    email:{
        type: String,
        required: true,
    },
    foto:{
        type: String,
        required: true,
        minLength: 3,
        maxLength: 300,
    },
    telefone:{
        type: Number,
        required: true
    },
    cargo:{
        type: String,
    },
    horasTrabalhadas:{
        type: Number,
    },
    horasSemana:{
        type: Number,
    }

});

const funcionarioModel = mongoose.model("funcionarios",camposSchema);

module.exports = funcionarioModel;
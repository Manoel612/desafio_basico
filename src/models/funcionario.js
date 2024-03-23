const mongoose = require("mongoose");

const camposSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    foto:{
        type: String,
        required: true,
    },
    telefone:{
        type: Number,
        required: true,
    },
    cargo:{
        required: true,
        type: String,
    },
    horasPorSemana:{
        required: true,
        type: Number,
    },
    horasTrabalhadas:{
        type: Number,
        default: 0
    },
});

const funcionarioModel = mongoose.model("funcionarios",camposSchema);

module.exports = funcionarioModel;
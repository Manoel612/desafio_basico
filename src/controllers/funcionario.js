const express = require("express");
const router = express.Router();
const routerName = "/funcionario";

const funcionarioModel = require("../models/funcionario");

router.get(routerName + "/:id", async (req,res) =>{
    const {id} = req.params;
    const funcionario = await funcionarioModel.findById(id);
    return res.status(200).json(funcionario);
})

router.get(routerName, async (req,res) =>{
    const funcionarios = await funcionarioModel.find();
    return res.status(200).json(funcionarios);
})

router.post(routerName, async (req,res) =>{
    const funcionario = await funcionarioModel.create(req.body);
    return res.status(200).json(funcionario);
})

router.put(routerName + "/:id", async (req,res) =>{
    const {id} = req.params;
    const horasTrabalhadas = await funcionarioModel.findById(id);
    horasTrabalhadas.horasTrabalhadas += req.body.adicionarHoras;
    await funcionarioModel.findByIdAndUpdate(id,horasTrabalhadas)
    return res.status(200).json(horasTrabalhadas);
})

router.delete(routerName + "/:id", async (req,res) => {
    const {id} = req.params;
    const funcionario = await funcionarioModel.findByIdAndDelete(id);
    return res.status(200).send(funcionario);
})
module.exports = router; 

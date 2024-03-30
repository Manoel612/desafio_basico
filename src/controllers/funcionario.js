const express = require("express");
const router = express.Router();
const routerName = "/funcionario";

const funcionarioModel = require("../models/funcionario");

router.get(routerName + "/:id", async (req,res) =>{
    const {id} = req.params;
    try{
        //const funcionario = await funcionarioModel.findById(id);
        const funcionario = await funcionarioModel.findOne({ _id: id});
        if( !funcionario )
        {
            return res.status(422).json({message: "Funcionário não encontrado"});
        }
        else return res.status(200).json(funcionario);
    } catch (err){
        return res.status(500).send(err);
    }
})

router.get(routerName, async (req,res) =>{
    try{
        const funcionarios = await funcionarioModel.find();
        return res.status(200).json(funcionarios);
    } catch (err){
        return res.status(500).send(err);
    }   
})

router.post(routerName, async (req,res) =>{
    try {
        const funcionario = await funcionarioModel.create(req.body);
        return res.status(200).json(funcionario);
    } catch (err){
        return res.status(500).send(err);
    }   
})

router.put(routerName + "/:id", async (req,res) =>{
    try{
        const {id} = req.params;
        const horasTrabalhadas = await funcionarioModel.findById(id);
        horasTrabalhadas.horasTrabalhadas += req.body.adicionarHoras;
        await funcionarioModel.findByIdAndUpdate(id,horasTrabalhadas)
        return res.status(200).json(horasTrabalhadas);
    } catch (err){
        return res.status(500).send(err);
    }   
})

router.delete(routerName + "/:id", async (req,res) => {
    try {
        const {id} = req.params;
        const funcionario = await funcionarioModel.findByIdAndDelete(id);
        return res.status(200).send(funcionario);
    } catch (err){
        return res.status(500).send(err);
    }   
})
module.exports = router; 

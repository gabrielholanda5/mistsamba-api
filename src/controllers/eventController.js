const PRISMA = require("../services");

async function buscar(req, res){
    try {
        const linhas = await PRISMA.event.findMany();
        res.json(linhas);
    } catch (error) {
        res.json({
            type: "error",
            description: error.message 
        });
    }
}

async function criar(req, res) {
    try {
        const dados = req.body;

        await PRISMA.event.create({
            data: dados
        });
        
        res.json({
            type: "success",
            description: "Registro criado com sucesso."
        });
        
    } catch (error) {
        res.json({
            type: "error",
            description: error.message 
        });
    }
}

async function editar(req, res){
    try {
        const dados = req.body;
        const { id } = req.params;
        
        await PRISMA.event.update({
            where: {
                id
            },
            data: dados
        });
        
        res.json({
            type: "success",
            description: "Registro atualizado com sucesso."
        })
        
    } catch (error) {
        res.json({
            type: "error",
            description: error.message 
        });
    }
}

async function deletar(req, res){
    try {
        const { id } = req.params;
        
        await PRISMA.event.delete({
            where: {
                id
            }
        });
        
        res.json({
            type: "success",
            description: "Registro deletado com sucesso."
        })
        
    } catch (error) {
        res.json({
            type: "error",
            description: error.message 
        });
    }
}

module.exports = { buscar, criar, editar, deletar }
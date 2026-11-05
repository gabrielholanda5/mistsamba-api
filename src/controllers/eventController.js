// const PRISMA = require("../services");
const PRISMA = require("../services");

async function buscar(req, res){
    try {
        const linhas = await PRISMA.imoveis.findMany();
        res.json(linhas);
    } catch (error) {
        res.json({
            type: "error",
            description: error.message 
        });
    }
}
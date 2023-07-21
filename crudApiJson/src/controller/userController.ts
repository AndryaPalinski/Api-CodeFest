import { Request, Response } from "express";
//Importar o pacote File System para manipular arquivos.
const fs = require('fs');
//Importar banco de dados de extensão .json.
const data: string = './database.json';

async function listenUsers (req: Request, res: Response) {
    //Analisa string JSON e transforma em um objeto JS.
    const jsonData = fs.readFileSync(data); 
    res.send(JSON.parse(jsonData));

};

export default {
    listenUsers,
}
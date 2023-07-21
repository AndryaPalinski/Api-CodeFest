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


async function postUsers (req: Request, res: Response) {
    const jsonDataBase = fs.readFileSync(data); 
    let content = JSON.parse(jsonDataBase);
    //Verifica a quantidade de objetos na base de dados.
    let index: number = Object.keys(content).length;
    
    content[index++] = req.body;
    const values = JSON.stringify(content);
   
    fs.writeFileSync(data, values)
   
   res.status(201).send("User registered succesfully! :D")
    //console.log(req.body); <-Testes
    //res.send(index);
};

async function putUser(req: Request, res: Response) {
  //Atribui a base de dados em nova variavel. 
  const jsonDataBase = fs.readFileSync(data);

  const userId = req.params.id; 
  let content = JSON.parse(jsonDataBase);

  content[userId] = req.body;
  
  const values = JSON.stringify(content);
 
  fs.writeFileSync(data, values)
 
  res.status(201).send(`Updated user ${userId} :>`)

};

async function deletUser (req: Request, res: Response) {
//atribui a base de dados em nova variavel
const jsonDataBase = fs.readFileSync(data);

//recupera o id enviado por parametro
const userId = req.params.id;

//analisa string JSON e transforma em um objeto JavaScript
let content = JSON.parse(jsonDataBase);

//delete
delete content[userId];

//analisa um objeto em JavaScript e transforma em uma string JSON
const values = JSON.stringify(content);

//lê o arquivo da base de dados e adiciona o novo objeto
fs.writeFileSync(data, values);

//retorno amigável para o usuário que o endpoint
res.send(`User with id ${userId} has been deleted ;--;`);

};


export default {
    listenUsers, 
    postUsers,
    putUser,
    deletUser
}
import { Request, Response } from "express";
import database from "../config/database";
//import fs from 'fs';
//const data = 'results.json';


async function listenUsers (req: Request, res: Response) {
    database.connection.query('SELECT * FROM clients', (err, results) =>{
        console.log(results);
        res.send(results);
    if(err){
        res.json({
            success: false
        });
    } else {
        res.json({
            success: true,
            mensage: 'Listagem de usuários realizada com sucesso.',
            data: results
        });
    }

    });
};

//Analisa string JSON e transforma em um objeto JS.
    //const jsonData = fs.readFileSync(data); 
    //res.send(JSON.parse(jsonData));

async function postUsers (req: Request, res: Response) {
    const querySql = 'INSERT INTO clients(DS_NAME, NM_CELLPHONE, DS_STATUS) VALUES (?, ?, ?);';
    const params = Array(
        req.body.DS_NAME,
        req.body.NM_CELLPHONE,
        req.body.DS_STATUS        
    );

    database.connection.query(querySql, params, (err, results) =>{
        
        res.json({
            success: true,
            mensage: 'Cadastro realizado com sucesso!',
            data: results 
        });
        //console.log(results);
    });
};

//const jsonDataBase = fs.readFileSync(data); 
    //let content = JSON.parse(jsonDataBase);
    //Verifica a quantidade de objetos na base de dados.
    //let index: number = Object.keys(content).length;
    
    //content[index++] = req.body;
    //const values = JSON.stringify(content);
   
    //fs.writeFileSync(data, values)
   
    //res.status(201).send("User registered succesfully! :D")
    //console.log(req.body); <-Testes
    //res.send(index);

async function putUser(req: Request, res: Response) {
  //Atribui a base de dados em nova variavel. 
  
  const userId = req.params.id; 
  
    const querySql = 'UPDATE clients SET DS_NAME = ?, NM_CELLPHONE = ?, DS_STATUS = ? WHERE ID_CLIENT = ?;'
    const params = Array(
        req.body.DS_NAME,
        req.body.NM_CELLPHONE,
        req.body.DS_STATUS,
        userId        
    );

    database.connection.query(querySql, params, (err, results) =>{
        res.json({
            success: true,
            mensage: 'Alterações realizado com sucesso!',
            data: results 
        });
    });
};

/*let content = JSON.parse(jsonDataBase);
  content[userId] = req.body;
  const values = JSON.stringify(content);
  fs.writeFileSync(data, values)
  res.status(201).send(`Updated user ${userId} :>`)*/


async function deletUser (req: Request, res: Response) {
//atribui a base de dados em nova variavel
//const jsonDataBase = fs.readFileSync(data);

//recupera o id enviado por parametro
const userId = req.params.id;

const querySql = 'DELETE FROM clients WHERE ID_CLIENT = ?';

database.connection.query(querySql, [userId], (err, results) =>{
    res.json({
     mensage: 'Cliente deletado com sucesso!',
    });
    
});

};

/*analisa string JSON e transforma em um objeto JavaScript
let content = JSON.parse(jsonDataBase);
//delete
delete content[userId];
//analisa um objeto em JavaScript e transforma em uma string JSON
const values = JSON.stringify(content);
//lê o arquivo da base de dados e adiciona o novo objeto
fs.writeFileSync(data, values);
//retorno amigável para o usuário que o endpoint
res.send(`User with id ${userId} has been deleted ;--;`);
};*/


export default {
    listenUsers, 
    postUsers,
    putUser,
    deletUser
};
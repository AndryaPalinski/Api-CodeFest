//Importar o pacote express para criar o servidor. 
const express = require("express");
//Importar o pacote File System para manipular arquivos.
const fs = require('fs');
//Importar banco de dados de extensão .json.
const data: string = './database.json';
//Instancia o express na variavell app.
const app = express()
//Para o express utilizar o JSON :>
app.use(express.json());


//Get- Exibe/Transmite dados. Post- Sempre usado para questionarios/formulários. Put-Usado para editar.  

//Listar usuários. 
app.get('/api/users', (req: any, res: any) =>{
    const jsonData = fs.readFileSync(data); //<-- Analisa string JSON e transforma em um objeto JS. 
    res.send(JSON.parse(jsonData));
});

//Cadastrar usuários.
app.post('/api/users', (req: any, res: any)=>{
    const jsonDataBase = fs.readFileSync(data); 
    let content = JSON.parse(jsonDataBase);
    let index: number = Object.keys(content).length;//<-- Verifica a quantidade de objetos na base de dados.
    
    content[index++] = req.body;
    const values = JSON.stringify(content);
   
    fs.writeFileSync(data, values)
   
   res.status(201).send("User registered succesfully! :D")
    //console.log(req.body); <-Testes
    //res.send(index);
});

//Atualizar usuário.
app.put('/api/user/:id', (req: any, res: any)=>{
    //Atribui a base de dados em nova variavel. 
    const jsonDataBase = fs.readFileSync(data);

    const userId = req.params.id; 
    let content = JSON.parse(jsonDataBase);

    content[userId] = req.body;
    
    const values = JSON.stringify(content);
   
    fs.writeFileSync(data, values)
   
    res.status(201).send(`User ${userId} atualizado :]`)

});

//Deletar usuário.
app.delete('/api/user/:id', (req: any, res: any) => {
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
});


export default app; 

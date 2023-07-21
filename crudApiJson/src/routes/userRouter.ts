const express = require('express'); 

import userController from "../controller/userController";

const router = express.Router(); 

//Get- Exibe/Transmite dados. Post- Sempre usado para questionarios/formulários. Put-Usado para editar.  

//Listar usuários. 
router.get('/users', userController.listenUsers);


/*
//Cadastrar usuários.
router.post('/users', (req: any, res: any)=>{
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
});

//Atualizar usuário.
router.put('/user/:id', (req: any, res: any)=>{
    //Atribui a base de dados em nova variavel. 
    const jsonDataBase = fs.readFileSync(data);

    const userId = req.params.id; 
    let content = JSON.parse(jsonDataBase);

    content[userId] = req.body;
    
    const values = JSON.stringify(content);
   
    fs.writeFileSync(data, values)
   
    res.status(201).send(`Updated user ${userId} :>`)

});

//Deletar usuário.
router.delete('/user/:id', (req: any, res: any) => {
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
*/
export default router;
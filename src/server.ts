const express = require('express');
const data = require('../database.json');

const app = express();
app.use(express.json());

let file = data; 

app.get('/funciona?', (req: any, res: any) => {
    res.send(data);
});

app.post('/funciona?', (req: any, res: any) => {
    console.log(req.body.idade);
    let user ={
        nome: req.body.nome,
        idade: req.body.idade,
        cidade: req.body.cidade
    }

file.push(user);

return res.send("Dados inseridos com sucesso"); 

});


app.listen(3000, () => console.log(`Tá funfando hehe`));



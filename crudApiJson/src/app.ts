//Importar o pacote express para criar o servidor. 
const express = require("express");
//Instancia o express na variavell app.
const app = express()
//Para o express utilizar o JSON :>
app.use(express.json());
//Faz a importação do Router para o app. 
import userRouter from './routes/userRouter'; 
//Mostra para o app o que ele deve passar para o server. 
app.use('/api/', userRouter);

export default app; 
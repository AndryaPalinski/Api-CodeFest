const express = require('express'); 

import userController from "../controller/userController";

const router = express.Router(); 

//Get- Exibe/Transmite dados. Post- Sempre usado para questionarios/formulários. Put-Usado para editar.  

//Listar usuários. 
router.get('/users', userController.listenUsers);

//Cadastrar usuários.
router.post('/users', userController.postUsers);

//Atualizar usuário.
router.put('/user/:id', userController.putUser);

//Deletar usuário.
router.delete('/user/:id', userController.deletUser);

export default router;
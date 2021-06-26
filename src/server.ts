import express from "express";
//biblioteca de tipos
// @types/express
const app = express();

/**
 * Tipos de métodos
 * GET     => Buscar uma informação
 * POST    => Inserir (Criar) uma informação 
 * PUT     => Alterar uma informação
 * DELETE  => Remover um dado
 * PATCH   => Alterar uma informação específica
 */

//Criando primeira rota
app.get("/test", (request, response) => {
  // resquest => Entrando
  // response => Saindo
  return response.send("Olá NLW")
})

//Criando rota POST
app.post("/test-post", (request, response) =>{
  return response.send("Olá NLW método POST")
})

//http://localhost:3000 definindo porta do servidor
app.listen(3000, () => console.log("Server is running "));
const express = require("express");
const lojasController = require("./controllers/lojas");
const produtosController = require("./controllers/produtos");

const routes = express.Router();

routes.get("/health", (request, response) =>
  response.json({ status: "Server running on port 3333" })
);
routes.post("/lojas", lojasController.create);
routes.get("/lojas", lojasController.list);

routes.post("/produtos", produtosController.create);
routes.get("/produtos", produtosController.list);

// No carrinho, devemos fazer para cada produto adicionado a ele um request para armazenar o ws:Carrinho/possui com o valor da referencia de cada produto. Mesmos dados, só muda o produto

module.exports = routes;

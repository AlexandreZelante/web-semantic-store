const express = require("express");
const lojasController = require("./controllers/lojas");

const routes = express.Router();

routes.get("/health", (request, response) =>
  response.json({ status: "Server running on port 3333" })
);
routes.post("/lojas", lojasController.create);
routes.get("/lojas", lojasController.list);
// routes.get("/produtos", AwsController.index);
// routes.get("/servicos", AwsController.index);

module.exports = routes;

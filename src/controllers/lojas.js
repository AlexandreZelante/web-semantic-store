const { createAndStoreTriple } = require("../libs/graphdb");

async function create(req, res) {
  // Pega loja
  const { sub, data } = req.body;

  // Chama a criação de loja do graphDb (Se comunica com o service)
  const turtle = await createAndStoreTriple(sub, data);

  // Devolve para o user
  res.json(turtle);
}

async function list(req, res) {}

module.exports = {
  create,
  list,
};

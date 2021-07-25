const { createAndStoreTriple } = require("../libs/graphdb");

async function create(req, res) {
  // Pega loja
  const { sub, data } = req.body;

  // Chama a criação de loja do graphDb (Se comunica com o service)
  const turtle = await createAndStoreTriple(sub, data);

  // Devolve para o user
  res.json(turtle);
}

async function list(req, res) {
  console.log(req.query);

  let responseData = [];

  if (req.query.hasOwnProperty("nome")) {
    // Query por nome
  } else if (req.query.hasOwnProperty("atividade")) {
    // Query por atividade
  } else {
    // Retorna todos
  }

  res.json(responseData);
}

module.exports = {
  create,
  list,
};

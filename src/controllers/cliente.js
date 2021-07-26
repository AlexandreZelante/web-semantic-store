const { getIdsByQueryResponse } = require("../utils/graphdb");
const {
  createAndStoreTriple,
  executeQuery,
  getDataFromTypes,
} = require("../libs/graphdb");
const { getClienteData } = require("../utils/queries");
const uuid = require("uuid");

async function create(req, res) {
  const { sub, data } = req.body;

  // Chama a criação de loja do graphDb (Se comunica com o service)
  const turtle = await createAndStoreTriple(sub, { id: uuid.v4(), ...data });

  // Devolve para o user
  res.json(turtle);
}

// Login
async function login(req, res) {
  const { username, password } = req.body;

  let query = getClienteData(username, password);

  const queryResponse = await executeQuery(query);
  const produtosIds = getIdsByQueryResponse(queryResponse);
  const dados = await getDataFromTypes(produtosIds, "Cliente");

  if (dados.length > 0) {
    res.json(dados[0]);
  } else {
    res.status(403).json(dados);
  }
}

module.exports = {
  create,
  login,
};

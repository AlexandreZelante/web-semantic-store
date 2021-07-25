const {
  createAndStoreTriple,
  executeQuery,
  getDataFromTypes,
} = require("../libs/graphdb");
const { getIdsByQueryResponse } = require("../utils/graphdb");
const {
  getAllIdsByType,
  getLojaIdByAtividade,
  getLojaIdByNome,
} = require("../utils/queries");

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

  let query;

  if (req.query.hasOwnProperty("nome")) {
    query = getLojaIdByNome(req.query.nome);
  } else if (req.query.hasOwnProperty("atividade")) {
    // Query por atividade
    query = getLojaIdByAtividade(req.query.atividade);
  } else {
    // Retorna todos
    query = getAllIdsByType("Loja");
  }

  const queryResponse = await executeQuery(query);
  const lojasIds = getIdsByQueryResponse(queryResponse);
  const dados = await getDataFromTypes(lojasIds, "Loja");

  res.json(dados);
}

module.exports = {
  create,
  list,
};

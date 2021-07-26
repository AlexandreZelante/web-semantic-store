const {
  createAndStoreTriple,
  executeQuery,
  getDataFromTypes,
} = require("../libs/graphdb");
const uuid = require("uuid");
const { getIdsByQueryResponse } = require("../utils/graphdb");
const {
  getAllIdsByType,
  getProdutosByLoja,
  getDataFromId,
} = require("../utils/queries");

async function create(req, res) {
  const { sub, data } = req.body;

  // Chama a criação de loja do graphDb (Se comunica com o service)
  const turtle = await createAndStoreTriple(sub, { id: uuid.v4(), ...data });

  // Devolve para o user
  res.json(turtle);
}

async function list(req, res) {
  let query;

  if (req.query.hasOwnProperty("idLoja")) {
    query = getProdutosByLoja(req.query.idLoja);
  } else {
    // Retorna todos
    query = getAllIdsByType("Produto");
  }

  console.log("query", query);

  const queryResponse = await executeQuery(query);
  const produtosIds = getIdsByQueryResponse(queryResponse);
  const dados = await getDataFromTypes(produtosIds, "Produto");

  res.json(dados);
}

async function listByIds(req, res) {
  const { produtos } = req.body;

  const dados = await getDataFromTypes(produtos, "Produto");

  res.json(dados);
}

module.exports = {
  create,
  list,
  listByIds,
};

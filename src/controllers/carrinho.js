const {
  createAndStoreTriple,
  executeQuery,
  getDataFromTypes,
} = require("../libs/graphdb");
const uuid = require("uuid");
const { getIdsByQueryResponse } = require("../utils/graphdb");
const { getAllIdsByType, getProdutosByLoja } = require("../utils/queries");
const { NAMESPACE } = require("../utils/constants");

async function create(req, res) {
  const { sub, data } = req.body;

  let produtos = [];
  const responseArray = [];
  //Para cada idProduto cria um ws:Carrinho/possui com valor ws:Produto/idPRoduto\
  if (data.produtos && data.produtos.length > 0) produtos = data.produtos;

  for (const idProduto of produtos) {
    const turtle = await createAndStoreTriple(sub, {
      id: uuid.v4(),
      possui: `${NAMESPACE}${idProduto}`,
      total: data.total,
    });
    responseArray.push(turtle);
  }

  // Devolve para o user
  res.json(responseArray);
}

module.exports = {
  create,
};

const { RDF_SYNTAX_IRI, NAMESPACE } = require("../utils/constants");

const PREFIXES = `PREFIX ws: <http://www.semanticweb.org/alexa/ontologies/2021/5/trabalho/> PREFIX rdf: <${RDF_SYNTAX_IRI}>`;

function getDynamicPrefix(type) {
  return `PREFIX data: <http://www.semanticweb.org/alexa/ontologies/2021/5/trabalho/${type}/>`;
}

function getAllIdsByType(type) {
  return `${PREFIXES} SELECT ?subject WHERE { ?subject a ws:${type} . }`;
}

function getLojaIdByAtividade(atividade) {
  const DYNAMIC_PREFIX = getDynamicPrefix("Loja");

  return `${PREFIXES} ${DYNAMIC_PREFIX} SELECT ?subject ?object WHERE { ?subject data:atividade "${atividade}" }`;
}

function getLojaIdByNome(nome) {
  const DYNAMIC_PREFIX = getDynamicPrefix("Loja");

  return `${PREFIXES} ${DYNAMIC_PREFIX} SELECT ?subject WHERE { ?subject data:nomeLoja "${nome}" }`;
}

function getDataFromId(type, id) {
  const DYNAMIC_PREFIX = getDynamicPrefix(type);

  return `${PREFIXES} ${DYNAMIC_PREFIX} SELECT ?predicate ?object WHERE { data:${id} ?predicate ?object . }`;
}

function getProdutosByLoja(idLoja) {
  const DYNAMIC_PREFIX = getDynamicPrefix("Produto");

  // Get Produtos de Loja X
  return `${PREFIXES} ${DYNAMIC_PREFIX} SELECT ?subject ?x WHERE { ?subject a ws:Produto . ?subject data:produtoDe ?x filter(str(?x)="${NAMESPACE}Loja/${idLoja}") }`;
}

function getClienteData(username, password) {
  const DYNAMIC_PREFIX = getDynamicPrefix("Cliente");

  return `${PREFIXES} ${DYNAMIC_PREFIX} SELECT ?subject ?predicate ?object  WHERE { ?subject a ws:Cliente . ?subject data:username ?username . ?subject data:password ?password . ?subject ?predicate ?object filter(str(?username)="${username}") filter(str(?password)="${password}")}`;
}

module.exports = {
  getAllIdsByType,
  getLojaIdByAtividade,
  getLojaIdByNome,
  getDataFromId,
  getProdutosByLoja,
  getClienteData,
};

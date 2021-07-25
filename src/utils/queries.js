const { RDF_SYNTAX_IRI } = require("../utils/constants");

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

module.exports = {
  getAllIdsByType,
  getLojaIdByAtividade,
  getLojaIdByNome,
  getDataFromId,
};

// PREFIX ws: http://www.semanticweb.org/alexa/ontologies/2021/5/trabalho/
// PREFIX info: http://www.semanticweb.org/alexa/ontologies/2021/5/trabalho/Loja/
// PREFIX rdf: http://www.w3.org/1999/02/22-rdf-syntax-ns#

// # Get todas as lojas
// SELECT ?subject WHERE { ?subject a ws:Loja . }

// # Get Loja por atividade
// SELECT ?subject ?object WHERE {
//     ?subject info:atividade ?object
// }

// # Get loja por nome
// SELECT ?subject ?predicate ?object WHERE {
//     ?subject info:nomeLoja "Americanas"
// }

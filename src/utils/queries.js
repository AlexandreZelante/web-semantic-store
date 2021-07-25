const PREFIXES = `
  PREFIX ws: http://www.semanticweb.org/alexa/ontologies/2021/5/trabalho/
  PREFIX rdf: http://www.w3.org/1999/02/22-rdf-syntax-ns#
`;

function getAllIdsByType(type) {
  return `${PREFIXES} SELECT ?subject WHERE { ?subject a ws:${type} . }`;
}

function get(type) {
  return `${PREFIXES} SELECT ?subject ?object WHERE {
      ?subject info:atividade ?object
    }`;
}

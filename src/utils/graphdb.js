const rdf = require("rdf");
const { NAMESPACE, RDF_SYNTAX_IRI } = require("../utils/constants");

function getRdfStructure(namespace, sub, tripleData) {
  return {
    "@context": {
      "@vocab": RDF_SYNTAX_IRI,
      rdf: RDF_SYNTAX_IRI,
    },
    "@id": namespace(`${sub}/${tripleData.id}`),
    type: namespace(`${sub}`),
  };
}

function getPropertiesRdfData(namespace, sub, tripleData) {
  let propertiesRdfData = {
    "@context": {
      "@vocab": `${NAMESPACE}${sub}/`,
    },
    "@id": namespace(`${sub}/${tripleData.id}`),
  };

  Object.keys(tripleData).map((key) => {
    propertiesRdfData[key] = rdf.factory.literal(
      tripleData[key],
      rdf.xsdns("string")
    );
  });

  return propertiesRdfData;
}

function turtleTransform(graphs) {
  const profile = rdf.environment.createProfile();

  let turtle = [];

  graphs.map((graph) => {
    const turtleParsed = graph
      .toArray()
      .sort(function (a, b) {
        return a.compare(b);
      })
      .map(function (stmt) {
        return stmt.toTurtle(profile);
      });

    turtle = turtle.concat(turtleParsed);
  });

  return turtle;
}

module.exports = {
  turtleTransform,
  getRdfStructure,
  getPropertiesRdfData,
};

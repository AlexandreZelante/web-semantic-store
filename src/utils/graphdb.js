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

function getIdsByQueryResponse(queryResponse) {
  //returns array of ids
  const idArrays = queryResponse.results.bindings.map((dataObj) => {
    return dataObj.subject.value.split("/")[
      dataObj.subject.value.split("/").length - 1
    ];
  });

  return idArrays;
}

function formatObject(responseObj) {
  const formattedObject = {};

  responseObj.results.bindings.forEach((obj) => {
    let property;

    if (obj.predicate.value.slice(-5) === "#type") {
      property =
        obj.predicate.value.split("#")[
          obj.predicate.value.split("#").length - 1
        ];
    } else {
      property =
        obj.predicate.value.split("/")[
          obj.predicate.value.split("/").length - 1
        ];
    }

    const value = obj.object.value;

    formattedObject[property] = value;
  });

  return formattedObject;
}

module.exports = {
  turtleTransform,
  getRdfStructure,
  getPropertiesRdfData,
  getIdsByQueryResponse,
  formatObject,
};

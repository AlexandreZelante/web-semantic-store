const rdf = require("rdf");
const { axiosGraphDB } = require("./axios");
const {
  turtleTransform,
  getPropertiesRdfData,
  getRdfStructure,
} = require("../utils/graphdb");
const { NAMESPACE, REPOSITORY } = require("../utils/constants");

const ws = rdf.ns(`${NAMESPACE}`);

async function createAndStoreTriple(sub, tripleData) {
  console.log("creating...");
  console.log("sub--->");
  console.log(tripleData);
  console.log("tripleData--->");
  console.log(tripleData);

  const rdfStructure = rdf.parse(getRdfStructure(ws, sub, tripleData));

  const propertiesRdfData = rdf.parse(
    getPropertiesRdfData(ws, sub, tripleData)
  );

  const graphs = [rdfStructure.graphify(), propertiesRdfData.graphify()];

  const turtle = turtleTransform(graphs).join("\n");

  await axiosGraphDB.post(`/repositories/${REPOSITORY}/statements`, turtle, {
    headers: { "content-type": "text/turtle" },
  });

  console.log(turtle);

  return turtle;
}

module.exports = {
  createAndStoreTriple,
};

const rdf = require("rdf");
const { axiosGraphDB } = require("./axios");
const { turtleTransform } = require("../utils/graphdb");
const { NAMESPACE, REPOSITORY } = require("../utils/constants");

const ws = rdf.ns(`${NAMESPACE}`);
const rdfFactory = rdf.factory;

async function createAndStoreTriple(sub, tripleData) {
  console.log("creating...");
  console.log("sub--->");
  console.log(tripleData);
  console.log("tripleData--->");
  console.log(tripleData);

  const data = rdf.parse({
    "@context": {
      "@vocab": "http://www.w3.org/1999/02/22-rdf-syntax-ns/",
      rdf: "http://www.w3.org/1999/02/22-rdf-syntax-ns/",
    },
    "@id": ws(`${sub}/${tripleData.id}`),
    type: ws(`${sub}`),
  });

  let dataProperties = {
    "@context": {
      "@vocab": `${NAMESPACE}${sub}/`,
    },
    "@id": ws(`${sub}/${tripleData.id}`),
  };

  Object.keys(tripleData).map((key) => {
    dataProperties[key] = rdfFactory.literal(
      tripleData[key],
      rdf.xsdns("string")
    );
  });

  dataProperties = rdf.parse(dataProperties);
  console.log("Data Properties: ", dataProperties);

  const dataGraph = data.graphify();
  const dataPropertiesGraph = dataProperties.graphify();

  console.log("dataGraph", dataGraph);

  const graphs = [dataGraph, dataPropertiesGraph];

  const turtle = turtleTransform(graphs).join("\n");

  const response = await axiosGraphDB.post(
    `/repositories/${REPOSITORY}/statements`,
    turtle,
    { headers: { "content-type": "text/turtle" } }
  );

  console.log(turtle);

  return turtle;
}

module.exports = {
  createAndStoreTriple,
};

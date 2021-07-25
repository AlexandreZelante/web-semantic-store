const rdf = require("rdf");
const { axiosGraphDB } = require("./axios");
const {
  turtleTransform,
  getPropertiesRdfData,
  getRdfStructure,
  formatObject,
} = require("../utils/graphdb");
const { NAMESPACE, REPOSITORY } = require("../utils/constants");
const { getDataFromId } = require("../utils/queries");

const ws = rdf.ns(`${NAMESPACE}`);

async function createAndStoreTriple(sub, tripleData) {
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

async function executeQuery(query) {
  try {
    const { data } = await axiosGraphDB.get(`/repositories/${REPOSITORY}`, {
      params: {
        query,
      },
    });

    return data;
  } catch (error) {
    console.log("error", error);
  }
}

async function getDataFromTypes(ids, type) {
  const formattedObjectArray = [];

  for (const id of ids) {
    const query = getDataFromId(type, id);
    const queryResponse = await executeQuery(query);
    const formattedObject = formatObject(queryResponse);

    formattedObjectArray.push(formattedObject);
  }

  return formattedObjectArray;
}

module.exports = {
  createAndStoreTriple,
  executeQuery,
  getDataFromTypes,
};

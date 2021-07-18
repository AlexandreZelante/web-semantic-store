const rdf = require("rdf");

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
};

const axios = require("axios");

const axiosGraphDB = axios.create({
  baseURL: "http://localhost:7200",
});

module.exports = {
  axiosGraphDB,
};

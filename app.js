// app.js

const path = require("path");
const express = require("express");
const app = express();
const api = require("./src/server/api");


// For all queries to localhost:8080/api/...
// use the API router (see below)
app.use("/api", api);
app.use("/game", express.static(path.join(__dirname, "dist")));
app.use("/coverage", express.static(path.join(__dirname, "coverage/lcov-report")));



// For any other route (URL) just send an error
app.get("*", (req, res) => {
  res.status(404).send({ error: "No route defined" });
});

//app.set("json spaces", 2);

module.exports = app;
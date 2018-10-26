// server.js
// We need to separate app and js to avoid
// our tests from leaving open processes.

const app = require("./app");
const port = process.env.PORT || 8080;

app.set("port", port);
app.listen(port);

console.log("Server listening on port " + port);
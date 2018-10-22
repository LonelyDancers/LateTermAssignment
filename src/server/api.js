// src/api.js

const express = require("express");
const app = express.Router();
const tic = require("../logic/tic");

app.get("/tic", (req, res) =>  {
	res.status(200).send("hello world");
});

module.exports = app;
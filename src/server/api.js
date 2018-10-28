// src/api.js

const express = require("express");
const app = express.Router();
const Tic = require("../logic/tic");
var tic = new Tic;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

//api GET for /tic/getboard returns a JSON of the board.
app.get("/tic/getboard", (req, res) =>  {
	res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify({ theBoard: tic.getCurrentBoard().getBoard()}, null, 3));
	//res.status(200).json((JSON.stringify({ a: tic.getBoard() }, null, 3)));
});

//api POST for /tic/insert. Posts an index.
//returns if the move was valid and returns whos turn it was/
app.post("/tic/insert", function(req, res) {
	var index = req.body.theIndex;
	var valid = tic.insert(index);
	res.send(JSON.stringify({ "valid": valid, "xTurn" : tic.getisXTurn()}, null, 3));
});

//api GET for /tic/gameover/ returns a json of the gamestatus
//'c' for continue, 'd' for draw, 'x' for x 
app.get("/tic/gameover", (req, res) =>  {
	res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify({ GameStatus: tic.gameOver() }, null, 3));
	//res.status(200).json((JSON.stringify({ a: tic.getBoard() }, null, 3)));
});

//api post for newgame. Restarts the board, turnnumber and sets xTurn to true;
app.post("/tic/newgame", function(req, res) {
	tic.newGame();
	res.status(200);
	res.send(JSON.stringify({ "reset": "true"}, null, 3));
});

module.exports = app;

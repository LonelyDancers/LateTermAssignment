import _ from 'lodash';
const api = require("../logic/tic.js");
const styles = require("../styles/styles.css");
const path = require("path");

//insert x/o into correct cell on click
$('td').click(function(){
    var index =  $('td').index(this);

    (async () => {
      const resultChar = await getGameOver(); //check if the game is over
      if (resultChar != 'c')
        return; //leave the function if the game is over
        let data = {
            "theIndex" : index
        }
        const content2 = await postInsert(data);
        var valid = content2.valid;
        var isXTurn = content2.xTurn;
        //if the move is valid insert switch the current player
        if(valid) {
            var turn = 'X';
            var insertedChar = 'O';
            if(isXTurn){
                turn = 'O';
                insertedChar = 'X'
            }
          $(this).html(turn);
          //write out who's turn it is
          $('#turn').html(insertedChar + ", it's your turn!");
        }
        const char = await getGameOver(); //check again if the game is over
        if( char == 'd') {
          const char = await getGameOver();
          if (char == 'c') {
            $('#turn').html(insertedChar + ", it's your turn!");
          }
        }
        const char = await getGameOver();
        if (char == 'd') {
          $('#turn').html("It's a draw!");
        }
        else if (char == 'x' || char == 'o') {
          $('#turn').html(char.toUpperCase() + " is the winner!");
        }
    })();
});
//if the reset button is clicked reset game and reload the page
$('#reset').click(function() {
  location.reload();
});

async function resetGame() {
  const rawResponse2 = await fetch("api/tic/newGame", {
    method: 'POST', // or 'PUT'
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .then(function(data) {
        return data;
    })
    .catch(function(error) {
        console.log("error posting");
        return;
        // If there is any error you will catch them here
    });
  const content2 = await rawResponse2;
};

async function getGameOver() {
  const gameOverChar = await fetch('api/tic/gameover')
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
      return data.GameStatus;
  })
  .catch(function(error) {
      console.log("error getting board");
      return;
      // If there is any error you will catch them here
  });
  return gameOverChar;
}
async function postInsert(data) {
  const rawResponse2 = await fetch("api/tic/insert", {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .then(function(data) {
      return data;
  })
  .catch(function(error) {
    console.log("error posting");
    return;
    // If there is any error you will catch them here
  });
  return rawResponse2;
}
$(window).load(resetGame());

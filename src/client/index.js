import _ from 'lodash';
const api = require("../logic/tic.js");
const styles = require("../styles/styles.css");
const path = require("path");

$('td').click(function(){
    var index =  $('td').index(this);
    (async () => {
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
      const resultChar = await gameOverChar;
      if (resultChar != 'c')
        return;
        const rawResponse = await fetch('api/tic/getboard')
        .then((resp) => resp.json()) // Transform the data into json
        .then(function(data) {
            return data.theBoard;
        })
        .catch(function(error) {
            console.log("error getting board");
            return;
            // If there is any error you will catch them here
        });
        const content = await rawResponse;
        let data = {
            "theIndex" : index
        }
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
        const content2 = await rawResponse2;
        var valid = content2.valid;
        var isXTurn = content2.xTurn;
        if(valid)
        {
            var turn = 'X';
            var insertedChar = 'O';
            if(isXTurn){
                turn = 'O';
                insertedChar = 'X'
            }
          $(this).html(turn);
          $('#turn').html(insertedChar + ", it's your turn!");
        }
        const rawResponse3 = await fetch('api/tic/gameover')
        .then((resp) => resp.json()) // Transform the data into json
        .then(function(data) {
            return data.GameStatus;
        })
        .catch(function(error) {
            console.log("error getting board");
            return;
            // If there is any error you will catch them here
        });
        const char = await rawResponse3;
        if( char == 'd') {
            alert("it's a draw!");//save draw to Score Board
        }
        else if(char == 'x' || char == 'o') {
            alert(char + ' won!');
        }
    })();
});

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

$(window).load(resetGame());

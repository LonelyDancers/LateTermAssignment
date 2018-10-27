import _ from 'lodash';
const api = require("../logic/tic.js");
const styles = require("../styles/styles.css");
const path = require("path");
var isXTurn = true;

$('td').click(function(){
    var index =  $('td').index(this);
    (async () => {
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
            "whosTurn": isXTurn,
            "theIndex" : index
        }
        console.log(data.theIndex + "WHOSTURN " + data.whosTurn);
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
        if(valid)
        {
            var turn = 'O';
            if(isXTurn){
                turn = 'X';
            }
        $(this).html(turn);
        isXTurn = !isXTurn;
        }
        else{
            alert('This space is occupied, please try another rate.');
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
    /* let data = {
        "whosTurn": isXTurn,
        "theIndex" : index
    }
    console.log(data.theIndex + "WHOSTURN " + data.whosTurn);
    fetch("api/tic/insert", {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(response => alert('Success:', JSON.stringify(response)))
      .catch(error => alert('Error:', error)); 
    var valid = tic.insert(index, isXTurn);
    if(valid)
    {
        var turn = 'O';
        if(isXTurn){
            turn = 'X';
        }
       $(this).html(turn);
       isXTurn = !isXTurn;
    }
    else{
        alert('This space is occupied, please try another rate.');
    }

    var char = tic.gameOver();
    if( char == 'd') {
        alert("it's a draw!");//save draw to Score Board
    }
    else if(char == 'x' || char == 'o') {
        alert(char + ' won!');
    } */
});

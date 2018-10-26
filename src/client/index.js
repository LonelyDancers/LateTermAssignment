import _ from 'lodash';
const tic = require("../logic/tic.js");
const styles = require("../styles/styles.css");

document.getElementById("button").addEventListener("click", function() {
   tic.insert(3, true);
    var x = tic.getBoard();
    alert(x);
    });

    
$('td').click(function(){
    var index =  $('td').index(this);

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
        alert(char, ' won!');
    }
});
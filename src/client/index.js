import _ from 'lodash';
const tic = require("../logic/tic.js");
const styles = require("../styles/styles.css");

document.getElementById("button").addEventListener("click", function() {
   tic.insert(3, true);
    var x = tic.getBoard();
    alert(x);
    });
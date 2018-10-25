import _ from 'lodash';
const tic = require("../logic/tic.js");
const styles = require("../styles/styles.css");

function component() {
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'there!'], ' ');
    return element;
   }
   document.body.appendChild(component());

   document.getElementById("button").addEventListener("click", function() {
   tic.insert(3, true);
    var x = tic.getBoard();
    alert(x);
    });
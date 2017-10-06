/*jslint browser: true*/
/*global  $*/

function othername() {
  "use strict";
  var input = document.getElementById("userInput").value;
  if (input != '') {
    document.getElementById("your-name").textContent = input;
  }
  $('.name-input').fadeOut(200);
  $('.avatar').addClass('slide');
  $('.avatar img').addClass('roll');
}

document.getElementById("userInput").onkeypress = function(e) {
  if (e.keyCode === 13) {
    othername();
  }
};

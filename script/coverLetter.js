/*jslint browser: true*/
/*global  $*/

function othername() {
  "use strict";
  var input = document.getElementById("userInput").value;
  document.getElementById("your-name").innerHTML = input;
  $('.name-input').fadeOut(200);
  $('.avatar').addClass('slide');
  $('.avatar img').addClass('roll');
}

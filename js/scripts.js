//Business Logic
//Player Object constructor
function Player(score, roll, total) {
  this.score = score;
  this.roll = roll;
  this.total = total;
}
//Methods attached to Player
Player.prototype.roll = function () {
  return Math.floor((Math.random() * 6) + 1);

}

var dieroll1 = 0
var roll1 = 0
var dieroll2 = 0
var roll2 = 0

function player2() {
  document.getElementbyId("roll1").disabled = true;
  document.getElementbyId("rolll2").disabled = false;
}
function player1() {
  document.getElementbyId("roll1").disabled = false;
  document.getElementbyId("roll2").disabled = true;
}
//UI Logic
$(document).ready(function () {

  $("button,#begin").click(function (event) {
    $("#register").hide();
    $("#body").slideDown(500);
    $("#body").show();
  });
  $("button,#start").click(function (event) {
    $("#body").hide();
    $("#final").slideDown(500);
    $("#enfin").show();
  });

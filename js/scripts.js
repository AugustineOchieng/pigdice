//Business Logic
//object constructor
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
  $("#roll1").click(function () {

    roll1 = Math.floor((Math.random() * 6) + 1);
    if (roll1 != 1) {
      dieroll1 += roll1
    } else {
      dieroll1 = 0;
      player2();
    }
    $("#dieroll1").text(roll1);
  });
  $("#roll2").click(function () {

    roll2 = Math.floor((Math.random() * 6) + 1);
    if (roll2 != 1) {
      dieroll2 += roll2
    } else {
      dieroll2 = 0;
    }
    $("#dieroll2").text(dieroll2);
  });
  $("#hold2").click(function () {
    $("#returns2").text(dieroll2);
    if (dieroll2 == 100) {
      $("#returns2").text("You are the winner!,game over!")
    } else {
      player1();
    }
  });
  $("#hold1").click(function () {
    $("#returns").text(dieroll1);
    if (dieroll1 == 100) {
      $("#returns").text("You are the winner!,game over!")
    } else {
      player2();
    }
  });
});

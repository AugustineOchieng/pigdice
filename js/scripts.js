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

// Move alternates between Users
// Win check after each move
// --Stretch--
// Users have the option to play against the computer
// Users are notified when there is no possible way for either to win a game

$(document).ready(function() {




function Column(height){
  this.height = height;
  this.contents = [];
}

Column.prototype.place = function(player){
  if(this.contents.length < this.height) {
    this.contents.push(player)
  } else {
    throw Error('column full');
  }
}

function Board(rows, cols, players){
  this.columns = this.createColumns(rows, cols);
  this.players = players;
  this.currentPlayer = players[0];
}

Board.prototype.createColumns = function(rows, cols) {
  var columns = [];
  while(cols--) {
    columns.push(new Column(rows))
  }
  return columns;
}

Board.prototype.place = function(player, col){
  try {
    this.columns[col - 1].place(player)
    console.log(this.columns)
  } catch (error) {
    console.log(error)
  }
}


// Player 1 = Red , Player 2 = Black
// create a turn object
// returning who's turn it is

function Player(name, active) {
  this.name = name;
  this.active = active;
}

Player.prototype.turn = function(){
  if (this.active === true){
      this.active = false;
    };
}

var hannah = new Player("hannah", true)
var andrew = new Player("andrew",false)

var players = [hannah, andrew]

// hannah.current
// hannah.turn()
// hannah.current

var redboard = new Board(2,1,players)

redboard.place(hannah,1)
// redboard.place(andrew, 1)



// var turn = {
//   current:"black",
//   change: function() {
//     if (this.current === "black"){
//       this.current = "red";
//     } else {
//       this.current = "black";
//     };
//   }
// }

// turn.current
// turn.change()



// -------------------

// var b = new Board(2,1)
// b.place('player 1', 1)
// b.place('player 2', 1)

// var hannah = new Player("name")









})

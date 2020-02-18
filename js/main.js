// Game board array that stores X or O when you click on a square
let gameBoard = [
  '', '', '',
  '', '', '',
  '', '', ''
];

$(document).ready(function() {
  let x = "x";
  let o = "o";
  let turns = 0;
  let gameInfo = $('#gameInfo');
  let scoreOfX = $('#xScore');
  let scoreOfO = $('#oScore')
  let xScore = 0;
  let oScore = 0;
  let game = 1;
  let winner;

  // function that resets (removes all classes) the board, is triggered when you click the reset button
  let reset = function () {
      $('#board li').text('-');
      $('#board li').removeClass('disabled');
      $('#board li').removeClass('o');
      $('#board li').removeClass('x');
      gameBoard = [ '', '', '', '', '', '', '', '', '' ];
      $(gameInfo).text(`Game ${game}`);
  }

  let newGame = function() {
    game = 1;
    xScore = 0;
    oScore = 0;

    // displays scores
    $(scoreOfX).text(`X - ${xScore}`);
    $(scoreOfO).text(`O - ${oScore}`);
    $(gameInfo).text(`Game ${game}`);
    alert('Game has been reset');
  }

  $("#newGame").on("click", function() {
    reset();
    newGame();
  });

  $("#reset").on("click", function() {
    reset();
  });

  // function that decides what happens when you click on a square in the board
  $('#board li').on('click', function() {
      let id;
      if(turns == 9) {
      $(gameInfo).text('Tie - Press New Game to move to the next game'); // if turns = 8, and no one has won, its a tie
      $( "li" ).not( "x", "o" ).addClass('disabled');
      turns = 0; //turns reset to 0
    } else if ($(this).hasClass('disabled')){ // if you click on a disabled square, it says the spot has been filled
      alert("You can't play in this spot");
    } else if(turns%2 == 0) { // if turns are an even number, will be filled with o
      turns++; //goes to next turn
      $(gameInfo).text('X Turn');
      id = $(this).attr('id');
      gameBoard[id] = 'O';
      $(this).text(o); // changes the text to "o"
      $(this).addClass('disabled o'); // square no longer allowed to be clicked

      // @TODO: use iteration here
      if(gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O' ||
        gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O' ||
        gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O' ||
        gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O' ||
        gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O' ||
        gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[0] === 'O' ||
        gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O' ||
        gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O') {
          $(gameInfo).text('Winner: O - Press New Game to move to the next game'); //displays that O has won
          $( "li" ).not( "x", "o" ).addClass('disabled');
          oScore ++;
          $(scoreOfX).text(`X - ${xScore}`);
          $(scoreOfO).text(`O - ${oScore}`);
          game++; // goes to next game
          turns = 0; // resets turns
      }

    } else { // if turns are not even, click will create an x
      turns++;
      $(gameInfo).text('O Turn');
      id = $(this).attr('id');
      gameBoard[id] = 'X';
      $(this).text(x); // changes the text to "x"
      $(this).addClass('disabled x');

      // @TODO: use iteration here
      if (gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X' ||
        gameBoard[3] === 'X'  && gameBoard[4] === 'X' && gameBoard[5] === 'X' ||
        gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X' ||
        gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X' ||
        gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X' ||
        gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[0] === 'X' ||
        gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X' ||
        gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X') {
        $(gameInfo).text('Winner: X - Press New Game to move to the next game');
        $( "li" ).not( "x", "o" ).addClass('disabled');

        // when the game ends, if any squares are NOT x, or o,
        // it adds the class disabled, which stops you from continuing to play after a game is over
        xScore ++; // adds 1 to score of x
        $(scoreOfX).text(`X - ${xScore}`); // displays scores
        $(scoreOfO).text(`O - ${oScore}`);
        game ++; // goes to next game
        turns = 0; // resets turns to 0
    }
  };
});
});

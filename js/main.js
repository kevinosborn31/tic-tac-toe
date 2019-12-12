let gameBoard = [ // Game board array that stores X or O when you click on a square
  '', '', '',
  '', '', '',
  '', '', ''
];
$(document).ready(function() {
  let x = "x";
  let o = "o";
  let turns = 0;
  //Spot variables
  let spot1 = $('#spot1');
  let spot2 = $('#spot2');
  let spot3 = $('#spot3');
  let spot4 = $('#spot4');
  let spot5 = $('#spot5');
  let spot6 = $('#spot6');
  let spot7 = $('#spot7');
  let spot8 = $('#spot8');
  let spot9 = $('#spot9');
  let gameInfo = $('#gameInfo');
  let scoreOfX = $('#xScore');
  let scoreOfO = $('#oScore')
  let xScore = 0;
  let oScore = 0;
  let game = 1; // starting game
  let winner;


  // let checkForWinner = function () {
  //   if (xScore === 3) {
  //     alert('X wins!');
  //     xScore = 0;
  //     game = 1;
  //   } else if (oScore === 3) {
  //     alert('O wins!');
  //     oScore = 0;
  //     game = 1;
  //   }
  // }
  let reset = function () { // function that resets (removes all classes) the board, is triggered when you click the reset button
      $('#board li').text('-');
      $('#board li').removeClass('disabled');
      $('#board li').removeClass('o');
      $('#board li').removeClass('x');

      gameBoard = [ '', '', '', '', '', '', '', '', '' ];

      // for (i = 0; i < gameBoard.length; i++) { // when you reset, it loops through and resets all values of the array that are X or O and makes them empty
      //   // if (gameBoard[i] == 'X' || gameBoard[i] == 'O') {
      //     gameBoard[i] = "";
      //   // }
      // }
      // checkForWinner();
      // if (xScore === 3 || oScore === 3) {
      //   xScore = 0;
      //   oScore = 0;
      // }
      $(gameInfo).text(`Game ${game}`);
  }

  let newGame = function() {
    game = 1;
    xScore = 0;
    oScore = 0;
    $(scoreOfX).text(`X - ${xScore}`); // displays scores
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
  $('#board li').on('click', function() { // function that decides what happens when you click on a square in the board
      let id;
      if(turns == 9) {
      $(gameInfo).text('Tie - Press New Game to move to the next game'); // if turns = 8, and no one has won, its a tie
      $( "li" ).not( "x", "o" ).addClass('disabled');
      turns = 0; //turns reset to 0
    } else if ($(this).hasClass('disabled')){ // if you click on a disabled square, it says the spot has been filled
      alert("You can't play in this spot");
    } else if(turns%2 == 0) { //if turns are an even number e.g. 2, 4, 6, 8, whichever one is clicked on will be filled with o
      turns++; //goes to next turn
      $(gameInfo).text('X Turn');
      id = $(this).attr('id');
      gameBoard[id] = 'O';
      $(this).text(o); // changes the text to "o"
      $(this).addClass('disabled o');
 // adds class "disabled" to the square which means it is taken
      // if statements that check winning combinations

      // gameBoard[0] === 'X'

      if(gameBoard[0] === 'O'&&gameBoard[1] === 'O'&&gameBoard[2] === 'O' || // checks all possible combinations for winning from gameBoard array
        gameBoard[3] === 'O'&&gameBoard[4] === 'O'&&gameBoard[5] === 'O' ||
        gameBoard[6] === 'O'&&gameBoard[7] === 'O'&&gameBoard[8] === 'O' ||
        gameBoard[0] === 'O'&&gameBoard[3] === 'O'&&gameBoard[6] === 'O' ||
        gameBoard[1] === 'O'&&gameBoard[4] === 'O'&&gameBoard[7] === 'O' ||
        gameBoard[2] === 'O'&&gameBoard[5] === 'O'&&gameBoard[0] === 'O' ||
        gameBoard[0] === 'O'&&gameBoard[4] === 'O'&&gameBoard[8] === 'O' ||
        gameBoard[2] === 'O'&&gameBoard[4] === 'O'&&gameBoard[6] === 'O') {
          // checkForWinner();
          $(gameInfo).text('Winner: O - Press New Game to move to the next game'); //displays that O has won
          $( "li" ).not( "x", "o" ).addClass('disabled'); //adds class disabled to any spaces not taken to stop you from continuing to play after a games over
          oScore ++; // adds 1 to o score
          $(scoreOfX).text(`X - ${xScore}`); // displays scores
          $(scoreOfO).text(`O - ${oScore}`);
          game ++; // goes to next game
          turns = 0; // resets turns
      }

    } else { // if turns are not even, click will create an x
      turns++;
      $(gameInfo).text('O Turn');
      id = $(this).attr('id');
      gameBoard[id] = 'X';
      $(this).text(x); // changes the text to "x"
      $(this).addClass('disabled x');
 // adds class "disabled" to the square which means it is taken
      if(gameBoard[0] === 'X'&&gameBoard[1] === 'X'&&gameBoard[2] === 'X' || // checks all possible combinations for winning from gameBoard array
        gameBoard[3] === 'X'&&gameBoard[4] === 'X'&&gameBoard[5] === 'X' ||
        gameBoard[6] === 'X'&&gameBoard[7] === 'X'&&gameBoard[8] === 'X' ||
        gameBoard[0] === 'X'&&gameBoard[3] === 'X'&&gameBoard[6] === 'X' ||
        gameBoard[1] === 'X'&&gameBoard[4] === 'X'&&gameBoard[7] === 'X' ||
        gameBoard[2] === 'X'&&gameBoard[5] === 'X'&&gameBoard[0] === 'X' ||
        gameBoard[0] === 'X'&&gameBoard[4] === 'X'&&gameBoard[8] === 'X' ||
        gameBoard[2] === 'X'&&gameBoard[4] === 'X'&&gameBoard[6] === 'X')
      {
        // checkForWinner();
        $(gameInfo).text('Winner: X - Press New Game to move to the next game');
        $( "li" ).not( "x", "o" ).addClass('disabled'); //when the game ends, if any squares are NOT x, or o, it adds the class disabled, which stops you from continuing to play after a game is over
        xScore ++; // adds 1 to score of x
        $(scoreOfX).text(`X - ${xScore}`); // displays scores
        $(scoreOfO).text(`O - ${oScore}`);
        game ++; // goes to next game
        turns = 0; // resets turns to 0
    }
  };
});
});

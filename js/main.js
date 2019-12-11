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
  let game = 1;
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
  let reset = function () {
      $('#board li').text('-');
      $('#board li').removeClass('disabled');
      $('#board li').removeClass('o');
      $('#board li').removeClass('x');
      // checkForWinner();
      // if (xScore === 3 || oScore === 3) {
      //   xScore = 0;
      //   oScore = 0;
      // }
      $(gameInfo).text(`Game ${game}`);
  }
  $("#reset").on("click", function() {
    reset();
  });
  $('#board li').on('click', function() {

     if(turns == 8) {
      $(gameInfo).text('Tie - Press the reset button to move to the next game'); // if turns = 8, and no one has won, its a tie
      $( "li" ).not( "x", "o" ).addClass('disabled');
      turns = 0; //turns reset to 0
    } else if ($(this).hasClass('disabled')){ // if you click on a disabled square, it says the spot has been filled
      alert("This spot has been filled");
    } else if(turns%2 == 0) { //if turns are an even number e.g. 2, 4, 6, 8, whichever one is clicked on will be filled with o
      turns++;
      $(gameInfo).text('X Turn');
      $(this).text(o); // changes the text to "o"
      $(this).addClass('disabled o'); // adds class "disabled" to the square which means it is taken
      if(spot1.hasClass('o')&&spot2.hasClass('o')&&spot3.hasClass('o') ||
        spot4.hasClass('o')&&spot5.hasClass('o')&&spot6.hasClass('o') ||
        spot7.hasClass('o')&&spot8.hasClass('o')&&spot9.hasClass('o') ||
        spot1.hasClass('o')&&spot4.hasClass('o')&&spot7.hasClass('o') ||
        spot2.hasClass('o')&&spot5.hasClass('o')&&spot8.hasClass('o') ||
        spot3.hasClass('o')&&spot6.hasClass('o')&&spot9.hasClass('o') ||
        spot1.hasClass('o')&&spot5.hasClass('o')&&spot9.hasClass('o') ||
        spot3.hasClass('o')&&spot5.hasClass('o')&&spot7.hasClass('o')) {
          // checkForWinner();
          $(gameInfo).text('Winner: O - Press the reset button to move to the next game');
          $( "li" ).not( "x", "o" ).addClass('disabled');
          oScore ++;
          $(scoreOfX).text(`X - ${xScore}`);
          $(scoreOfO).text(`O - ${oScore}`);
          game ++;
          turns = 0;
      }

    } else { // if turns are not even, it will be filled with x
      turns++;
      $(gameInfo).text('O Turn');
      $(this).text(x); // changes the text to "x"
      $(this).addClass('disabled x'); // adds class "disabled" to the square which means it is taken
      if(spot1.hasClass('x')&&spot2.hasClass('x')&&spot3.hasClass('x') ||
        spot4.hasClass('x')&&spot5.hasClass('x')&&spot6.hasClass('x') ||
        spot7.hasClass('x')&&spot8.hasClass('x')&&spot9.hasClass('x') ||
        spot1.hasClass('x')&&spot4.hasClass('x')&&spot7.hasClass('x') ||
        spot2.hasClass('x')&&spot5.hasClass('x')&&spot8.hasClass('x') ||
        spot3.hasClass('x')&&spot6.hasClass('x')&&spot9.hasClass('x') ||
        spot1.hasClass('x')&&spot5.hasClass('x')&&spot9.hasClass('x') ||
        spot3.hasClass('x')&&spot5.hasClass('x')&&spot7.hasClass('x'))
      {
        // checkForWinner();
        $(gameInfo).text('Winner: X - Press the reset button to move to the next game');
        $( "li" ).not( "x", "o" ).addClass('disabled');
        xScore ++;
        $(scoreOfX).text(`X - ${xScore}`);
        $(scoreOfO).text(`O - ${oScore}`);
        game ++;
        turns = 0;
    }
  };
});
});

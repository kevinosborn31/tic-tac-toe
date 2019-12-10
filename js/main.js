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
  let reset = function () {
      $('#board li').text('-');
      $('#board li').removeClass('disable');
      $('#board li').removeClass('o');
      $('#board li').removeClass('x');
      alert('Game Reset');
  }
  $("#reset").on("click", function() {
    reset();
  });
  $('#board li').on('click', function() {
  //if statement that checks all possible combinations of winning
    if(spot1.hasClass('o')&&spot2.hasClass('o')&&spot3.hasClass('o') ||
      spot4.hasClass('o')&&spot5.hasClass('o')&&spot6.hasClass('o') ||
      spot7.hasClass('o')&&spot8.hasClass('o')&&spot9.hasClass('o') ||
      spot1.hasClass('o')&&spot4.hasClass('o')&&spot7.hasClass('o') ||
      spot2.hasClass('o')&&spot5.hasClass('o')&&spot8.hasClass('o') ||
      spot3.hasClass('o')&&spot6.hasClass('o')&&spot9.hasClass('o') ||
      spot1.hasClass('o')&&spot5.hasClass('o')&&spot9.hasClass('o') ||
      spot3.hasClass('o')&&spot5.hasClass('o')&&spot7.hasClass('o'))
    {
      alert('Winner: O - Press the reset button to start again');

    } else if(spot1.hasClass('x')&&spot2.hasClass('x')&&spot3.hasClass('x') ||
      spot4.hasClass('x')&&spot5.hasClass('x')&&spot6.hasClass('x') ||
      spot7.hasClass('x')&&spot8.hasClass('x')&&spot9.hasClass('x') ||
      spot1.hasClass('x')&&spot4.hasClass('x')&&spot7.hasClass('x') ||
      spot2.hasClass('x')&&spot5.hasClass('x')&&spot8.hasClass('x') ||
      spot3.hasClass('x')&&spot6.hasClass('x')&&spot9.hasClass('x') ||
      spot1.hasClass('x')&&spot5.hasClass('x')&&spot9.hasClass('x') ||
      spot3.hasClass('x')&&spot5.hasClass('x')&&spot7.hasClass('x'))
    {
      alert('Winner: X - Press the reset button to start again');
    } else if(turns == 8) {
      alert('Tie Game - Press the reset button to start again');
      turns = 0;
    } else if ($(this).hasClass('disabled')){
      alert('This spot is already filled');
    } else if(turns%2 == 0) {
      turns++;
      $(this).text(o);
      $(this).addClass('disable o');
      if(spot1.hasClass('o')&&spot2.hasClass('o')&&spot3.hasClass('o') ||
        spot4.hasClass('o')&&spot5.hasClass('o')&&spot6.hasClass('o') ||
        spot7.hasClass('o')&&spot8.hasClass('o')&&spot9.hasClass('o') ||
        spot1.hasClass('o')&&spot4.hasClass('o')&&spot7.hasClass('o') ||
        spot2.hasClass('o')&&spot5.hasClass('o')&&spot8.hasClass('o') ||
        spot3.hasClass('o')&&spot6.hasClass('o')&&spot9.hasClass('o') ||
        spot1.hasClass('o')&&spot5.hasClass('o')&&spot9.hasClass('o') ||
        spot3.hasClass('o')&&spot5.hasClass('o')&&spot7.hasClass('o')) {
          alert('Winner: O - Press the reset button to start again');
          turns = 0;
      }

    } else {
      turns++;
      $(this).text(x);
      $(this).addClass('disable x');
      if(spot1.hasClass('x')&&spot2.hasClass('x')&&spot3.hasClass('x') ||
        spot4.hasClass('x')&&spot5.hasClass('x')&&spot6.hasClass('x') ||
        spot7.hasClass('x')&&spot8.hasClass('x')&&spot9.hasClass('x') ||
        spot1.hasClass('x')&&spot4.hasClass('x')&&spot7.hasClass('x') ||
        spot2.hasClass('x')&&spot5.hasClass('x')&&spot8.hasClass('x') ||
        spot3.hasClass('x')&&spot6.hasClass('x')&&spot9.hasClass('x') ||
        spot1.hasClass('x')&&spot5.hasClass('x')&&spot9.hasClass('x') ||
        spot3.hasClass('x')&&spot5.hasClass('x')&&spot7.hasClass('x'))
      {
        alert('Winner: X - Press the reset button to start again');
        turns = 0;
    }
  };
});
});

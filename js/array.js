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
  let resetScore = function () {
    xScore = 0;
    oScore = 0;
  }
  let xScore = 0;
  let oScore = 0;
  let game = 1;
  let winner;

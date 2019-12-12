// const winningCombinations = {
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9]
//   [1, 5, 9],
//   [3, 5, 7]
// }

const naughts = [
  '', '', '',
  '', '', '',
  '', '', '',
  '', '', ''
]

const crosses = [
  '', '', '',
  '', '', '',
  '', '', '',
  '', '', ''
]

const makeAMove = function (spot, player) {
  naughts[spot] = player;
  console.log(crosses[spot]);
  return;
}

// create helper function that updates the rowTracker and also logs (or "draws") the next row on the board
// in this helper function
// if there is a hit on the rowIdx and colIdx only then should an X or O be drawn on the board
// the row tracker tells us when to stop drawing rows on the board, but midway through each 3 x 3 row, we also need to check if there are values for that row

const rlSync = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

const COORDINATES = {
  1: [0, 0],
  2: [0, 1],
  3: [0, 2],
  4: [1, 0],
  5: [1, 1],
  6: [1, 2],
  7: [2, 0],
  8: [2, 1],
  9: [2, 2]
}

function displayBoard(board) {
  console.clear();
  const acrossSpaces = 5;

  function displayBorders() {
    console.log('-'.repeat(acrossSpaces) + '+' + '-'.repeat(acrossSpaces) + '+' + '-'.repeat(acrossSpaces));
  }
  //drawing the board
  console.log('');
  console.log(' '.repeat(acrossSpaces) + '|' + ' '.repeat(acrossSpaces)+ '|');
  console.log(`  ${board[0][0]}  |  ${board[0][1]}  |  ${board[0][2]}`);
  console.log(' '.repeat(acrossSpaces) + '|' + ' '.repeat(acrossSpaces)+ '|');
  displayBorders();
  console.log(' '.repeat(acrossSpaces) + '|' + ' '.repeat(acrossSpaces)+ '|');
  console.log(`  ${board[1][0]}  |  ${board[1][1]}  |  ${board[1][2]}`);
  console.log(' '.repeat(acrossSpaces) + '|' + ' '.repeat(acrossSpaces)+ '|');
  displayBorders();
  console.log(' '.repeat(acrossSpaces) + '|' + ' '.repeat(acrossSpaces)+ '|');
  console.log(`  ${board[2][0]}  |  ${board[2][1]}  |  ${board[2][2]}`);
  console.log(' '.repeat(acrossSpaces) + '|' + ' '.repeat(acrossSpaces)+ '|');
  
}
function initializeBoard() {
  let board = [];
  for (let row = 0; row < 3; row += 1){
    board[row] = [INITIAL_MARKER,INITIAL_MARKER,INITIAL_MARKER];
  }
  return board;
}

function getAvailableSquares(board) {
  let keys = Object.keys(COORDINATES);
  let availableSquares = [];
  keys.forEach(square => {
    if(!board[COORDINATES[square][0]][COORDINATES[square][1]].trim()){
      availableSquares.push(square);
    };

  })
  return availableSquares.join(', ');
}

function promptUser(board) {
  let available = getAvailableSquares(board, COORDINATES);
  let square = rlSync.question(`Choose a square with the numbers ${available} (1 is the top left square; 9 is the bottom right square): `);

  return square;
}

function playerChoosesSquare(board) {

  while (true) {
    try {
      let square = promptUser(board, COORDINATES);
      let coord = COORDINATES[square];
      board[coord[0]][coord[1]] = HUMAN_MARKER;
      break;
    } catch (error) {
      console.log(`Looks like you didn't enter a valid number for a square.\n`);
    };
  }
}

function computerChoosesSquare(board) {
  let available = getAvailableSquares(board, COORDINATES).split(',');
  let randomIndex = Math.floor(Math.random() * available.length);
  // let keys = Object.keys(COORDINATES);
  console.log({board});
  console.log({randomIndex});
  console.log({available});
  board[COORDINATES[randomIndex][0]][COORDINATES[randomIndex][1]] = COMPUTER_MARKER;

}

function boardFull(board) {
  return board.every(row => row.filter(val => val.trim()).length === row.length);
}

function someoneWon(board) {
  return !!detectWinner(board);
}
function detectWinner(board) {
  /*
  needs to return the name of the winner or a null value if game was a tie
  a player wins when:
      1. in board arraythe values of the first index in each nested array is the same:
        [['X','X','O'],['X','O','X'],['X', 'O', 'O']]
      2. all three values in any nested array are the same
      3. the first value in the first nested, the second value in the second nested, and third val in third nested are the same
      4. the 3rd value in the first nested, the second value in the second nested, the first val in the third nested are the same
  */
 for (let i = 0; i < 1; i += 1) {
  for (let j = 0; j < 2; j += 1) {
    // first use case, a match down columns  
    console.log({i}, {j})
    if (board[i+2] && (board[i][j] === board[i+1][j]) && (board[i][j] === board[i+2][j])) {
      board[i][j] === HUMAN_MARKER ? console.log('You win!') : console.log('Computer wins!');
      break;
    } else if (board[i+2] && (board[i][j] === board[i+1][j+1]) && (board[i][j] === board[i+2][j+2])) {
      // diagonol starting in top left going down to bottom right
      board[i][j] === HUMAN_MARKER ? console.log('You win!') : console.log('Computer wins!');
    } else if (board[i+2] && (board[i][j+2] === board[i+1][j+1]) && (board[i][j] === board[i+2][j])) {
      // diagonol match starting from top right going down to bottom left
      board[i][j] === HUMAN_MARKER ? console.log('You win!') : console.log('Computer wins!');
    }
  }
 }

 board.forEach(row => {
  let userWin = row.every(val => val === HUMAN_MARKER);
  let computerWin = row.every(val => val === COMPUTER_MARKER);
  if (userWin || computerWin) {
    userWin === true ? console.log('You win!') : console.log('Computer wins!');
  }
})

}
let board = [['X','O', 'X'],['X','X','O'],['O','X','X']];
detectWinner(board);

// let board = initializeBoard();
// displayBoard(board);

// while (true) {
//   playerChoosesSquare(board);
//   computerChoosesSquare(board);
//   displayBoard(board);

//   if (someoneWon(board) || boardFull(board)) break;
// }
// if (someoneWon(board)) {
//   prompt(`${detectWinner(board)} won!`);
// } else {
//   prompt("It's a tie!");
// }
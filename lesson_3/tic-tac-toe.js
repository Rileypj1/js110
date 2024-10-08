// create helper function that updates the rowTracker and also logs (or "draws")
// the next row on the board
// in this helper function
// if there is a hit on the rowIdx and colIdx only then
// should an X or O be drawn on the board
// the row tracker tells us when to stop drawing rows on the board,
// but midway through each 3 x 3 row, we also need to check if
// there are values for that row

const rlSync = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_TO_WIN = 5;
const FIRST_PLAYER = ['player', 'computer', 'choose'];
// three options the user can choose from to go first.
// the user can select themselves,
// the computer, or have the program choose which player goes first.
// this selection should happen at the start of the game
// Algo:
// 1. Player is prompted with three options from FIRST_PLAYER
// array to select who should go first.
// The user input is saved to a variable whoGoesFirst
// 2. If 'player' is selected, the order of functions on
// who chooses the first square should start with player
// 3. if 'computer', the order is switched from step 2.
// 4. otherwise, if 'choose' is selected, a random choice is made by the
// code that would produce either 0 or 1, which would then be
// index used to select from FIRST_PLAYER
// - based on the choice, either step 2 or 3 is followed

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
};

function displayBoard(board) {
  console.clear();
  const acrossSpaces = 5;

  function displayBorders() {
    console.log('-'.repeat(acrossSpaces) + '+' + '-'.repeat(acrossSpaces) + '+' + '-'.repeat(acrossSpaces));
  }
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);
  //drawing the board
  console.log('');
  console.log(' '.repeat(acrossSpaces) + '|' + ' '.repeat(acrossSpaces) + '|');
  console.log(`  ${board[0][0]}  |  ${board[0][1]}  |  ${board[0][2]}`);
  console.log(' '.repeat(acrossSpaces) + '|' + ' '.repeat(acrossSpaces) + '|');
  displayBorders();
  console.log(' '.repeat(acrossSpaces) + '|' + ' '.repeat(acrossSpaces) + '|');
  console.log(`  ${board[1][0]}  |  ${board[1][1]}  |  ${board[1][2]}`);
  console.log(' '.repeat(acrossSpaces) + '|' + ' '.repeat(acrossSpaces) + '|');
  displayBorders();
  console.log(' '.repeat(acrossSpaces) + '|' + ' '.repeat(acrossSpaces) + '|');
  console.log(`  ${board[2][0]}  |  ${board[2][1]}  |  ${board[2][2]}`);
  console.log(' '.repeat(acrossSpaces) + '|' + ' '.repeat(acrossSpaces) + '|');
}
function initializeBoard() {
  let board = [];
  for (let row = 0; row < 3; row += 1) {
    board[row] = [INITIAL_MARKER,INITIAL_MARKER,INITIAL_MARKER];
  }
  return board;
}

function getAvailableSquares(board) {
  let keys = Object.keys(COORDINATES);
  let availableSquares = [];
  keys.forEach(square => {
    let row = COORDINATES[square][0];
    let column = COORDINATES[square][1];
    if (!board[row][column].trim()) {
      availableSquares.push(square);
    }

  });
  return availableSquares;
}

function joinOr(numArray, separator = ', ',lastWord = 'or') {
  let finalString = '';
  for (num of numArray) {
    if (numArray.length > 1 && num === numArray[numArray.length - 1]) {
      finalString += (lastWord + ' ' + num);
    } else if (numArray.length > 2) {
      finalString += (num + separator);
    } else {
      finalString += num + ' ';
    }
  }
  return finalString;
}


function promptUser(board) {
  let available = getAvailableSquares(board, COORDINATES);
  let square = '';
  while (true) {
    square = rlSync.question(`Choose a square with the numbers ${joinOr(available)} (1 is the top left square; 9 is the bottom right square): `);
    if (!available.includes(square)) {
      prompt('Looks like you didn\'t choose an available square.');
    } else {
      break;
    }
  }

  return square;
}

function playerChoosesSquare(board) {

  while (true) {
    try {
      let square = promptUser(board, COORDINATES);
      let coord = COORDINATES[square];
      board[coord[0]][coord[1]] = HUMAN_MARKER;
      break;
    } catch {
      console.log(`Looks like you didn't enter a valid number for a square.\n`);
    }
  }
}
// const WINNING = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],
//          [2,5,8],[3,6,9],[1,5,9],[3,5,7]];
// findAtRiskSquares
/*
input: the board array that contains nested arrays per row
output: array of squares that have 2 preceding human markers in a row
Other rules: if there's no at risk squares,
      the computer should pick a random available square
Data Structure:
  - the input board is an array of nested arrays:
    [['X','X','O'],['X','O','X'],['X', 'O', 'O']]
  - will need to compare markers across all nested arrays.
  note: each nested array is a row on the 3x3 tictactoe board
Algo:
  - create empty array atRisk
  - check the first value in each nested array
    - if rows (1,2) or rows (2,3) have human markers, push the square that
    would complete tictactoe to atRisk array if that square is empty
    (i.e., if in available array)
  - within each nested array, check if indices (0,1) or (1,2) have human markers
    - follow the same rule as step 1 subpoint
  - in row 1 (the first nested array),check if index 0 is a human marker
   and if row 2 index 1 is a human marker, or row 2 index 1 and row 3 index 2
  - do the same but for opposite diagonal: check
  row 1 index 2 and row 2 index 1 or row 2 index 1 and row 3 index 0
    - follow the same rule as step 1 subpoint
  - return atRisk array;
*/
// pass in all coordinates with their key value pair as the inputs--
// that way you have the square number and the [row,col]
// already at the beginning

function findAtRiskSquares(board, marker) {
  let atRisk = [];
  const WINNING = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],
    [3,6,9],[1,5,9],[3,5,7]];
  WINNING.forEach((combo) => {
    let blankValue = [];
    let filtered = combo.filter((val) => {
      let boardVal = COORDINATES[val];
      let row = boardVal[0];
      let col = boardVal[1];
      if (board[row][col] === ' ') {
        blankValue.push(val);
      }
      return board[row][col] === marker;
    });

    if (filtered.length === 2 && blankValue.length === 1) {
      atRisk.push(blankValue[0]);
    }
  });
  // remove duplicate values from array
  atRisk = atRisk.filter((coord, idx) => atRisk.indexOf(coord) === idx);
  return atRisk;
}


function computerChoosesSquare(board) {
  let atRiskSquares = findAtRiskSquares(board, COMPUTER_MARKER);
  let chosenIndex = 0;
  let randomIndex = 0;

  if (atRiskSquares.length > 0) {
    randomIndex = Math.floor(Math.random() * atRiskSquares.length);
    chosenIndex = atRiskSquares[randomIndex];
  } else {
    atRiskSquares = findAtRiskSquares(board, HUMAN_MARKER);
  }

  if (atRiskSquares.length > 0) {
    randomIndex = Math.floor(Math.random() * atRiskSquares.length);
    chosenIndex = atRiskSquares[randomIndex];
  } else {
    let available = getAvailableSquares(board, COORDINATES);
    randomIndex = Math.floor(Math.random() * available.length);
    chosenIndex = available.includes('5') ? 5 : available[randomIndex];
  }

  let coordinate = COORDINATES[chosenIndex];
  let row = coordinate[0];
  let column = coordinate[1];
  board[row][column] = COMPUTER_MARKER;
}


function boardFull(board) {
  return board.every(row => row.filter(val => val.trim())
    .length === row.length);
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function detectWinner(board) {
  /*
  needs to return the name of the winner or a null value if game was a tie
  a player wins when:
      1. in board array, the values of the same index
      in each nested array is the same:
        [['X','X','O'],['X','O','X'],['X', 'O', 'O']]
      2. all three values in any nested array are the same
      3. the first value in the first nested, the second value in
      the second nested, and third val in third nested are the same
      4. the 3rd value in the first nested, the second value in
      the second nested, the first val in the third nested are the same
  */
  for (let col = 0; col <= 2; col += 1) {
    // first win scenario, a match down columns
    if (
      board[0][col].trim() &&
      (board[0][col] === board[1][col]) &&
      (board[0][col] === board[2][col])
    ) {
      return board[0][col] === HUMAN_MARKER ? 'Player' : 'Computer';
    }
  }

  // 2nd win scenario: diagonol starting in top left going down to bottom right
  if (
    board[0][0].trim() &&
    (board[0][0] === board[1][1]) &&
    (board[0][0] === board[2][2])
  ) {
    return board[0][0] === HUMAN_MARKER ? 'Player' : 'Computer';
  }

  // 3rd win scenario: diagonol match starting
  // from top right going down to bottom left
  if (
    board[0][2].trim() &&
    (board[0][2] === board[1][1]) &&
    (board[0][2] === board[2][0])
  ) {
    return board[0][2] === HUMAN_MARKER ? 'Player' : 'Computer';
  }

  // last win scenario: all 3 vals the same in nested array
  let acrossWin = null;
  board.forEach(row => {
    let userWin = row.every(val => val === HUMAN_MARKER);
    let computerWin = row.every(val => val === COMPUTER_MARKER);
    if (userWin) {
      acrossWin = 'Player';
    } else if (computerWin) {
      acrossWin = 'Computer';
    }
  });
  return acrossWin;
}

function displayScore(scores, result, winner) {
  if (result === 'winner') {
    prompt(`${winner} won this round!`);
    prompt(`You have ${scores.Player} ${scores.Player === 1 ? 'point' : 'points'}. Computer has ${scores.Computer} ${scores.Computer === 1 ? 'point' : 'points'}.`);
  } else {
    prompt("It's a tie!");
    prompt(`You have ${scores.Player} ${scores.Player === 1 ? 'point' : 'points'}. Computer has ${scores.Computer} ${scores.Computer === 1 ? 'point' : 'points'}.`);
  }
}

function chooseSquare(board, current) {
  if (current === 'Player') {
    playerChoosesSquare(board);
  } else if (current === 'Computer') {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(current) {
  let newCurrent = current === 'Player' ? 'Computer' : 'Player';
  return newCurrent;
}

// game play logic
while (true) {
  let board = initializeBoard();
  let gameScore = {
    Player: 0,
    Computer: 0
  };
  let winner = '';
  while (gameScore.Player < GAMES_TO_WIN && gameScore.Computer < GAMES_TO_WIN) {
    board = initializeBoard();
    let result = '';
    let whoGoesFirst = rlSync.question(`Who should move first? ${joinOr(FIRST_PLAYER)}? `).toLowerCase();
    if (whoGoesFirst === 'choose') {
      let rand = Math.floor(Math.random() * 2);
      whoGoesFirst = FIRST_PLAYER[rand];
    }
    let currentPlayer = whoGoesFirst.slice(0,1).toUpperCase()
        + whoGoesFirst.slice(1);
    while (true) {
      displayBoard(board);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);

      if (someoneWon(board)) {
        winner = detectWinner(board);
        gameScore[winner] += 1;
        result = 'winner';
        displayBoard(board);
        break;
      } else if (boardFull(board)) {
        result = 'tie';
        displayBoard(board);
        break;
      }

    }
    displayScore(gameScore, result, winner);
    if (gameScore.Player === GAMES_TO_WIN ||
      gameScore.Computer === GAMES_TO_WIN) {
      break;
    }

    prompt('Continue playing? (y or n)');
    let keepPlaying = rlSync.question()[0];

    while (!keepPlaying && !['y','n'].includes(keepPlaying)) {
      prompt('Looks like we didn\'t understand. Play again? (y or n) ');
      keepPlaying = rlSync.question()[0];
    }

    if (keepPlaying.toLowerCase() !== 'y') break;
  }
  displayBoard(board);
  if (gameScore.Player === GAMES_TO_WIN ||
    gameScore.Computer === GAMES_TO_WIN) {

    prompt(`${winner} won the game!`);
  }
  prompt('Play again? (y or n)');
  let answer = rlSync.question()[0];

  while (!answer && !['y','n'].includes(answer)) {
    prompt('Looks like wwe did\'t understand. Play again? (y or n) ');
    answer = rlSync.question()[0];
  }
  if (answer.toLowerCase() !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');


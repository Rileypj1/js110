function displayBoard(board) {
  const acrossSpaces = 5;
  const boardHeight = 11;
  const cols = 5; 
  const rows = 2;
  const coordinates = []
  board.forEach((row,rowIdx) => {
    row.forEach((sym,colIdx) => {
      if (sym) coordinates.push([rowIdx, colIdx, sym]);
    })
  })

  
  function displayBorders() {
    console.log('-'.repeat(acrossSpaces) + '+' + '-'.repeat(acrossSpaces) + '+' + '-'.repeat(acrossSpaces));
  }
  for (let i = 0; i < 3; i += 1) {
    if (coordinates.length) {
      console.log(' '.repeat(acrossSpaces) + '|' + ' '.repeat(acrossSpaces)+ '|');
      switch(coordinates[i][1]) {
        case 0:
          console.log(' '.repeat(2) + coordinates[i][2] + ' '.repeat(2) + '|' + ' '.repeat(acrossSpaces) + '|')
          break;
        case 1:
          console.log(' '.repeat(acrossSpaces) + '|' + ' '.repeat(2) + coordinates[i][2] + ' '.repeat(2) + '|');// + ' '.repeat(acrossSpaces)+ '|');
          break;
        case 2:
          console.log(' '.repeat(acrossSpaces) + '|' + ' '.repeat(acrossSpaces) + '|' + ' '.repeat(2) + coordinates[i][2] + ' '.repeat(2))
          break;

      }
      // console.log(' '.repeat(acrossSpaces) + '|' + ' '.repeat(acrossSpaces)+ '|');
      console.log(' '.repeat(acrossSpaces) + '|' + ' '.repeat(acrossSpaces)+ '|');
    } else {
      console.log(' '.repeat(acrossSpaces) + '|' + ' '.repeat(acrossSpaces)+ '|');
      console.log(' '.repeat(acrossSpaces) + '|' + ' '.repeat(acrossSpaces)+ '|');
      console.log(' '.repeat(acrossSpaces) + '|' + ' '.repeat(acrossSpaces)+ '|');
    }

    if (i === 0 || i == 1) displayBorders();

  }
  console.log('')
  console.log(coordinates);
}

let board = [['','X',''],['','','O'],['X','','']];

displayBoard(board);
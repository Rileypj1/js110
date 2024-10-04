/*
1. Initialize deck
2. Deal cards to player and dealer ✅
3. Player turn: hit or stay
   - repeat until bust or stay
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
   - repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner.
*/
const rlSync = require('readline-sync');

function makeDeck() {
  let arr = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
  for (let i = 1; i < 3; i += 1) {
    arr = arr.concat(arr);
  }
  return arr;
}
//shuffle cards in random order
function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
  return array;
}

function convertCardsToValues (currentPlayerCards) {
  //
}

function deal(deck, player1, player2) {
/*
1. since the deck at this point
is randomly shuffled, take the deck and select the first card
2. assign it to card1 with the property of the value of the card

*/
  function assignCards(selectedPlayer) {
    let counter = 1
    while (counter <= 2) {
      selectedPlayer[`card${counter}`] = deck.shift();
      counter += 1;
    }
  }
  assignCards(player1);
  assignCards(player2);
}


function getTotalValue(currentPlayer) {
  return Object.values(currentPlayer).reduce((acc, card) => acc + card);
}

function busted(currentPlayer) {
  let values = getTotalValue(currentPlayer);
  return values > 21;
}

// while (true) {
  // const deck = shuffle(makeDeck());

  // const player = {};
  // let totalPlayer = getTotalValue(player);
  // const dealer = {};
  // let totalDealer = getTotalValue(dealer);
  // deal(deck, player, dealer);

//   /*
//   Player Turn
//   1. Ask player to hit or stay.
//   2. If stay, stop asking.
//   3. Otherwise, go to #1.
//   */
//   while (true) {
//     console.log("hit or stay?");
//     let answer = rlSync.question();
//     if (answer.toLowerCase() === 'stay' || busted()) break;
//   }
//   if (busted()) {
//     // probably end the game? or ask the user to play again?
//   } else {
//     console.log("You chose to stay!");  // if player didn't bust, must have stayed to get here
//   }

  /*
  Dealer Turn

  */
// }

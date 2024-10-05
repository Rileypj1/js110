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
const CARD_NAMES = {
  J: 'Jack',
  Q: 'Queen',
  K: 'King',
  A: 'Ace'
};

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

function calculateAcesValue(currentPlayerCards) {
  // if there's only one Ace, check the total + 11 > 21, the value of Ace should be set to 1
  // any new aces, check if 1 + 11 + total is > 21, and if so, both Aces should be set to 1
  let filterOutAces = currentPlayerCards.filter(card => card !== 'A');
  let currentAces = currentPlayerCards.filter(card => card === 'A').length;
  let total = filterOutAces.reduce((acc, cardValue) => acc + cardValue, 0);

  if (currentAces === 0 && total <= 10) {
    return 10;
  } 
  if (total + (11 * currentAces) < 21) {
    return total + (11 * currentAces) + 11 < 21 ? 11: 1;
  } else {
    return total + 1 + 11 < 21 ? 11: 1;
  }
}


function convertCardsToValues (currentPlayerCards) {
  // 1. If it's a number on the card, leave the number
  // 2. Face cards = 10 
  // 3. For Aces "A", look at the current total. Run the calculate Aces function
  let cards = Object.values(currentPlayerCards);
  cards = cards.map(card => {
    if (card > 0 && card < 10) {
      return card;
    } else if (['J','Q','K'].includes(card)) {
      return 10;
    } else {
      return calculateAcesValue(cards);
    }
  })
  return cards;
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
function joinAnd(playersCards) {
  let finalPhrase  = '';
  playersCards.forEach((card, idx) => {
    if (idx === playersCards.length-2) {
      finalPhrase += (card + ' and ');
    } else {
      idx === playersCards.length - 1 ? finalPhrase += card : finalPhrase += card + ', ';
    }
  });
  return finalPhrase;
}

function nameFaceCards(arr) {
  arr = arr.map(card => {
    if (['J','Q','K','A'].includes(card)) {
      card = CARD_NAMES[card];
      return card;
    } else {
      return card;
    }
  });
  return arr;
}

function displayDeal(currentPlayer, name) {
  let cards = Object.values(currentPlayer);
  cards = nameFaceCards(cards);
  if (name === 'dealer') {
    console.log(`Dealer has ${cards[0]} and unknown card`)
  } else {
    console.log(`You have: ${joinAnd(cards)}`);
  }
}

function getTotalValue(currentPlayer) {
  let converted = convertCardsToValues(currentPlayer);
  return converted.reduce((acc, card) => acc + card, 0);
}
// let player = { card1: 3, card2: 9, card4: 8, card5: 'J',card3: 'A' };
// console.log(busted(player));

function busted(totalCardValue) {
  return totalCardValue > 21;
}

function doesDealerHitOrStay(currentPlayer) {
  let dealerCurrentTotal = getTotalValue(currentPlayer);
  if (dealerCurrentTotal >= 17) {
    return 'stay';
  } else {
    return 'hit';
  }
}

function displayWinner(player1, player2) {
  let player1Total = getTotalValue(player1);
  let player2Total = getTotalValue(player2);

  if (player1Total > player2Total) {
    console.log(`Your total: ${player1Total}.\nThe dealer's total: ${player2Total}. You won!`);
  } else if (player2Total > player1Total) {
    console.log(`Your total: ${player1Total}.\nThe dealer's total: ${player2Total}. Dealer won!`);
  } else {
    console.log(`Your total: ${player1Total}.\nThe dealer's total: ${player2Total}. It's a tie!`);
  }
}

while (true) {
  console.clear();
  const deck = shuffle(makeDeck());
  const player = {};
  const dealer = {};

  deal(deck, player, dealer);
  displayDeal(dealer, 'dealer');
  displayDeal(player, 'player');
  /*
  Player Turn
  1. Ask player to hit or stay.
  2. If stay, stop asking.
  3. Otherwise, go to #1.
  */
 // currently this is resetting my deck of cards after each loop and not remembering what cards I have
  while (true) {
    console.log("hit or stay?" + '\n');
    let answer = rlSync.question();
    if (answer.toLowerCase() === 'stay') break;
    player[`card${Object.values(player).length + 1}`] = deck.shift();
    if (busted(getTotalValue(player))) break;
    displayDeal(player, 'player');
  }
  if (busted(getTotalValue(player))) {
    displayDeal(player, 'player');
    // probably end the game? or ask the user to play again?
    console.log('Looks like you went over 21! Dealer wins. Would you like to play again? (y/n)')
    let answer = rlSync.question();
    if (answer.toLowerCase() === 'n') {
      console.log('Thanks for playing 21!')
      break;
    }
  } else {
    console.log("You chose to stay!");  // if player didn't bust, must have stayed to get here
    console.log(`Here are your total points: ${getTotalValue(player)}. Dealer's round now!\n\n`);
  }

  /*
  Dealer Turn
  */
  while (true) {
    console.log("hit or stay?\n");
    let decision = doesDealerHitOrStay(dealer);

    console.log(`Dealer chose ${decision}`);
    if (decision === 'stay' || busted(getTotalValue(dealer))) break;
    dealer[`card${Object.values(dealer).length + 1}`] = deck.shift();
    displayDeal(dealer, 'dealer');
  }
  if (busted(getTotalValue(dealer))) {
    displayDeal(dealer, 'dealer')
    console.log('You won! Looks like the dealer was busted. Would you like to play again? (y/n)');
    let answer = rlSync.question();
    if (answer.toLowerCase() === 'n') {
      console.log('Thanks for playing 21!')
      break;
    }
  } else {
    displayWinner(player, dealer);
  }
  console.log('Would you like to play again? (y/n)');
  let answer = rlSync.question();
  if (answer.toLowerCase() === 'n') {
    console.log('Thanks for playing 21!')
    break;
  }
}

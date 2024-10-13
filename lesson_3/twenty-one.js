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
    if (card >= 2 && card <= 10) {
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
    console.log(`You have ${joinAnd(cards)}`);
  }
}

function getTotalValue(currentPlayer) {
  let converted = convertCardsToValues(currentPlayer);
  return converted.reduce((acc, card) => acc + card, 0);
}
// let player = { card1: 7, card2: 10, card4: 'Q' };
// console.log(convertCardsToValues(player));

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
  let dealerCards = nameFaceCards(player2);
  let winner = (player1Total > player2Total) && (player1Total !== player2Total) ? 'You': 'Dealer';

  if (player1Total === player2Total) {
    console.log(`\nYou had: ${displayDeal(player1, 'player')}. Your total: ${player1Total}.`);
    console.log(`The dealer had ${joinAnd(dealerCards)}. The dealer's total: ${player2Total}. It's a tie!`);
  } else {
    console.log(`\nYou had: ${displayDeal(player1, 'player')}. Your total: ${player1Total}.`);
    console.log(`The dealer had ${joinAnd(dealerCards)}. The dealer's total: ${player2Total}. ${winner} won!`);
  }
}

function runDealerTurn(dealer, deck) {
  while (true) {
    console.log("hit or stay?\n");
    let decision = doesDealerHitOrStay(dealer);

    console.log(`Dealer chose ${decision}`);
    if (decision === 'stay') {
      return 'stay';
    } else if (busted(getTotalValue(dealer))) {
      return 'busted';
    }
    dealer[`card${Object.values(dealer).length + 1}`] = deck.shift();
    displayDeal(dealer, 'dealer');
  }
}

function displayBustedMessage(bool, inputPlayer, playerName) {
  if (bool) {
    displayDeal(inputPlayer, playerName);
    let winner = playerName === 'player' ? 'Dealer' : 'Player';
    // probably end the game? or ask the user to play again?
    console.log(`\nLooks like you went over 21! ${winner} wins.`);
  }
}
function runPlayerTurn(player, dealer, deck) {
  while (true) {
    console.log("hit or stay?" + '\n');
    answer = rlSync.question();
    if (answer.toLowerCase() === 'stay') return 'stay';
    player[`card${Object.values(player).length + 1}`] = deck.shift();
    if (busted(getTotalValue(player))) return 'busted';
    displayDeal(player, 'player');
    displayDeal(dealer, 'dealer');
  };
}
function playAgainAndCheckResponse(message) {
  let str = rlSync.question(message);
  while (!['y','n','Y', 'N', 'Yes'.toLowerCase(), 'No'.toLowerCase()].includes(str.trim())) {
    str = rlSync.question(message);
  }
  return str.toLowerCase();
}

while (true) {
  console.clear();
  const deck = shuffle(makeDeck());
  const player = {};
  const dealer = {};
  let answer = '';

  deal(deck, player, dealer);
  displayDeal(player, 'player');
  displayDeal(dealer, 'dealer');

  /*
  Player Turn
  1. Ask player to hit or stay.
  2. If stay, stop asking.
  3. Otherwise, go to #1.
  */

  let outcome = runPlayerTurn(player, dealer, deck);
  let dealerOutcome = ''
  if (outcome === 'busted') {
    displayBustedMessage(busted(getTotalValue(player)), player, 'player');
    answer = playAgainAndCheckResponse('Would you like to play again? Please type y/n ');
  } else {
      // Dealer Turn
    dealerOutcome = runDealerTurn(dealer, deck);
    if (answer === 'n') break;
    if (dealerOutcome === 'busted') {
      displayDeal(dealer, 'dealer')
      console.log('You won! Looks like the dealer was busted.');
      answer = playAgainAndCheckResponse('Would you like to play again? (y/n)');
    } else {
      displayWinner(player, dealer);
      answer = playAgainAndCheckResponse('Would you like to play again? (y/n) ');
    }
  }

  if(answer === 'n') break;
}

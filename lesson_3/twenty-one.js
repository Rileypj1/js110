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
const SUITS = ['S','H','D','C'];
const SUIT_NAMES  = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
const POINT_THRESHOLD = 21;
const DEALER_POINTS_UNTIL_STAYING = 17;
const WINNER_LOG_LINES = 50;

function makeDeck() {
  let arr = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
  let finalDeck = [];
  for (let suit = 0; suit < 4; suit += 1) {
    arr.forEach(cardValue => {
      finalDeck.push([SUITS[suit],cardValue]);
    });
  }
  return finalDeck;
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
  let filterOutAces = currentPlayerCards.filter(card => card[1] !== 'A');
  let currentAces = currentPlayerCards.filter(card => card[1] === 'A').length;
  let total = filterOutAces.reduce((acc, cardValue) => acc + cardValue[1], 0);

  if (currentAces === 0 && total <= 10) {
    return 10;
  }
  if (total + (11 * currentAces) <= POINT_THRESHOLD) {
    return total + (11 * currentAces) + 11 <= POINT_THRESHOLD ? 11 : 1;
  } else {
    return total + 1 + 11 <= POINT_THRESHOLD ? 11 : 1;
  }
}


function convertCardsToValues (currentPlayerCards) {
  // 1. If it's a number on the card, leave the number
  // 2. Face cards = 10
  // 3. For Aces "A", look at the current total. Run the calculate Aces function
  let cards = Object.values(currentPlayerCards);
  cards = cards.map(card => {
    if (card[1] >= 2 && card[1] <= 10) {
      return card[1];
    } else if (['J','Q','K'].includes(card[1])) {
      return 10;
    } else {
      return calculateAcesValue(cards);
    }
  });
  return cards;
}

function deal(deck, player1, player2) {

  function assignCards(selectedPlayer) {
    let counter = 1;
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
    if (idx === playersCards.length - 2) {
      finalPhrase += (card + ' and ');
    } else {
      finalPhrase += idx === playersCards.length - 1 ? card : card + ', ';
    }
  });
  return finalPhrase;
}

function nameFaceCards(arr) {
  arr = arr.map(card => {
    let whichSuit = SUITS.indexOf(card[0]);
    if (['J','Q','K','A'].includes(card[1])) {
      let name = CARD_NAMES[card[1]];
      return  name + ' of ' + SUIT_NAMES[whichSuit];
    } else {
      return card[1] + ' of ' + SUIT_NAMES[whichSuit];
    }
  });
  return arr;
}

function displayDeal(currentPlayer, name, mask = 'n') {
  let cards = Object.values(currentPlayer);
  cards = nameFaceCards(cards);
  if (name === 'dealer' && mask === 'y') {
    console.log(`Dealer has the ${cards[0]} and hidden card`);
  } else if (name === 'dealer' && mask === 'n') {
    console.log(`Dealer has the ${joinAnd(cards)}`);
  } else {
    console.log(`You have ${joinAnd(cards)}`);
  }
}

function getTotalValue(currentPlayer) {
  let converted = convertCardsToValues(currentPlayer);
  return converted.reduce((acc, card) => acc + card, 0);
}


function busted(totalCardValue) {
  return totalCardValue > POINT_THRESHOLD;
}


function doesDealerHitOrStay(dealerCurrentTotal) {
  if (dealerCurrentTotal >= DEALER_POINTS_UNTIL_STAYING) {
    return 'stay';
  } else {
    return 'hit';
  }
}

function displayWinner(player1, player2, totals) {
  let player1Total = totals['playerTotal'];
  let player2Total = totals['dealerTotal'];
  let winner = (player1Total > player2Total) && (player1Total !== player2Total) ? 'You' : 'Dealer';
  console.log('='.repeat(WINNER_LOG_LINES));
  if (player1Total === player2Total) {
    displayDeal(player1, 'player');
    displayDeal(player2,'dealer');
    console.log(`It's a tie!`);
  } else {
    displayDeal(player1, 'player');
    displayDeal(player2,'dealer');
    console.log(`${winner} won!`);
  }
  console.log('='.repeat(WINNER_LOG_LINES));
}

function runDealerTurn(dealer, deck, totals) {
  while (true) {
    console.log("hit or stay?\n");
    let decision = doesDealerHitOrStay(totals['dealerTotal']);

    console.log(`Dealer chose ${decision}`);
    if (decision === 'stay') {
      return 'stay';
    }
    dealer[`card${Object.values(dealer).length + 1}`] = deck.shift();
    totals['dealerTotal'] = getTotalValue(dealer);
    if (busted(totals['dealerTotal'])) {
      return 'busted';
    }
    displayDeal(dealer, 'dealer');
  }
}

function displayBustedMessage(inputPlayer, playerName) {
  displayDeal(inputPlayer, playerName);
  let winner = playerName === 'player' ? 'Dealer' : 'Player';
  console.log('='.repeat(WINNER_LOG_LINES));
  console.log(`\nLooks like ${playerName} went over 21! ${winner} wins.\n`);
  console.log('='.repeat(WINNER_LOG_LINES));
}

function runPlayerTurn(player, dealer, deck, totals) {
  while (true) {
    console.log("hit or stay?" + '\n');
    let answer = rlSync.question();
    if (answer.toLowerCase() === 'stay') return 'stay';
    player[`card${Object.values(player).length + 1}`] = deck.shift();
    totals['playerTotal'] = getTotalValue(player);
    if (busted(totals['playerTotal'])) return 'busted';
    displayDeal(player, 'player');
    displayDeal(dealer, 'dealer','y');
  }
}

function playAgainAndCheckResponse(message) {
  let str = rlSync.question(message);
  while (!['y','n','Y', 'N', 'yes', 'no'].includes(str.trim().toLowerCase())) {
    str = rlSync.question(message);
  }
  return str.toLowerCase();
}

// game play
while (true) {
  console.clear();
  const deck = shuffle(makeDeck());
  const player = {};
  const dealer = {};
  let answer = '';

  deal(deck, player, dealer);
  displayDeal(player, 'player');
  displayDeal(dealer, 'dealer','y');

  let totals = {
    playerTotal: getTotalValue(player),
    dealerTotal: getTotalValue(dealer)
  };

  // player turn
  let outcome = runPlayerTurn(player, dealer, deck, totals);
  let dealerOutcome = '';
  if (outcome === 'busted') {
    displayBustedMessage(player, 'player');
  } else {
    // Dealer Turn
    dealerOutcome = runDealerTurn(dealer, deck, totals);
    if (answer === 'n') break;
    if (dealerOutcome === 'busted') {
      displayBustedMessage(dealer, 'dealer');
    } else {
      displayWinner(player, dealer, totals);
    }
  }
  answer = playAgainAndCheckResponse('Would you like to play again? (y/n) ');
  if (answer === 'n') break;
}
// *******Final features to add: local total variable and Best to Five feature

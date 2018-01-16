//Create four objects, one for each card in the cards array
var cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];


//Create an array for the card(s) in Play
var cardsInPlay = [];

//Create a function to check for a card match
var checkForMatch = function () {
	//Check to see if two cards match and give feedback based on results
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		} 
	else {
    	alert("Sorry, try again.");
  		}
	};
// Create a function for steps when a user flips a card
var flipCard = function (cardId) {
	
	// Use console.log() to display the card that the user flipped
	console.log("User flipped " + cards[cardId].rank);
	
	//Add card user flipped to cardsInPlay array
	cardsInPlay.push(cards[cardId].rank);

	 // Display the image path in the console
  	console.log(cards[cardId].cardImage)

  	// Display the suit in the console
 	console.log(cards[cardId].suit)

	// Check to see if 2 cards have been played
	if (cardsInPlay.length === 2) {
		// If true, call checkForMatch function
		checkForMatch();
		}
	};

// Simulate User card flip (argument using index number)
flipCard(0);
// Simulate another User card flip (argument using index number)
flipCard(2);

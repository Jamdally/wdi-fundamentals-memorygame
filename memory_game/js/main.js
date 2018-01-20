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
var flipCard = function () {
	// Get the data-id of the card that was just flipped and cache it
  	cardId = this.getAttribute('data-id');
  	console.log(cardId);

  	// Add rank to array of cards that are in play
  	cardsInPlay.push(cards[cardId].rank);

 	 // Display the card's image
 	 this.setAttribute('src', cards[cardId].cardImage);

 		 // Check to see if two cards have been played
 	 	if (cardsInPlay.length === 2) {
    	// If so, call the checkForMatch function
    	checkForMatch();
    	// Empty cards in play array for next try
    	cardsInPlay = [];
  		}
	};
// Cretae a function that will create your board
var createBoard = function () {
  // Create a for Loop through the cards array.
  for (var i = 0; i < cards.length; i++) {
    // Use createElement method to create an img element and store it in a variable
    var cardElement = document.createElement('img');

 		// use the setAttribute() method to add a src attribute for the cardElement
    	cardElement.setAttribute('src', 'images/back.png');

		// use the setAttribute() method to set the card's 'data-id' attribute
		// 'data-id' should be the index of the current element
   		cardElement.setAttribute('data-id', i);

		// Add  event listener so that when a card is clicked, the function flipCard will be executed
    	cardElement.addEventListener('click', flipCard);

   		// Append the card to the board
    	document.getElementById('game-board').appendChild(cardElement);
  		}
	}
// Execute the createBoard function to create the board.
createBoard();

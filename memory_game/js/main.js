//Create an array for the cards
var cards = ['queen', 'queen', 'king', 'king'];

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
	console.log("User flipped " + cards[cardId]);
	
	//Add card user flipped to cardsInPlay array
	cardsInPlay.push(cards[cardId]);

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

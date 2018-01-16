//Create an array for the cards
var cards = ['queen', 'queen', 'king', 'king'];

//Create an array for the card(s) in Play
var cardsInPlay = [];

//Create variable to represent the first card the user flipped
var cardOne = cards[0];
// Add card to array of cards in play using push method
cardsInPlay.push(cardOne);
// Use console.log() to display the card that the user flipped
console.log("User flipped " + cardOne);

// Create a variable to represent the second card the user flipped
var cardTwo = cards[2];
// Add card to array of cards in play using push method
cardsInPlay.push(cardTwo);
// Use console.log() to display the card that the user flipped
console.log("User flipped " + cardTwo);

// Check to see if the length of the cardsInPlay array is 2
if (cardsInPlay.length === 2) {

// Check to see if two cards match and provide feedback
if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
	} 
else {
    alert("Sorry, try again.");
  	}
}


// Use console.log to display card selected by User (user flipped) two at a time. 
console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);
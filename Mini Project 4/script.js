var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

console.log("Hello")
///// variables

/*MULTIPLE SINGULAR FUNCTIONS THAT DO SPECIFIC THINGS AND THEN JUST HAVE THE MAIN GAME FUNCTION CALL THEM!!!!!!!*/


//// functon to click and start the game using event listener connected to start and this initializes the full game function

startButton.addEventListener("click", beginGame);


//// full game function
// function for the click to clicking start brings up the words on the screen with a series of numbers and from a file of words

const beginGame = function() {
    console.log("hello")
};

//the  timer starts to begin counting down

// the page shows the amount of letters in the word represented by an _

// guessing the letters with keydown brings up the letters on the screen, if wrong nothing happens

// if times run s out before its guessed then game over and losses is added 1 and displays game over

// if word guessed right then game stops and wins is added 1


//// the local drive stores the saved scores so when reopen they are there 



//// reset button function allows for reset of the scores

//// init function to store the scores whihc initialzes the screen to have the JSON taken from local drive and shown on the screen 

//// init call 
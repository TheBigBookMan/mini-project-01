// if (window.confirm("Hello, welcome to Rock, Paper, Scissors. Would you like to play?")) {
//     window.open("Yes, I would like to play", "Buzz off!");
// }

//rock = 1
//paper = 2
//scissors = 3

var wins = 0
var losses = 0
var ties = 0

let compGuess = Math.floor(Math.random() * (3 - 1 + 1) + 1)
console.log("Comp guesses", compGuess)

let open = window.prompt("Are you ready to play rock, paper, scissors?", "Yes");
if (open === "Yes") {
    var guess = window.prompt("Choose R for rock, or S for scissors or P for paper."
    );
} else {
    window.alert("Goodbye")
}

console.log("You guessed", guess)

let yourGuess = function(guess) {
    if (guess === "R") {
        return 1;
    } else if (guess === "P") {
        return 2;
    } else if (guess === "S") {
        return 3;
    }
}

console.log(yourGuess(guess))

// let decision = function(yourGuess) {
//     if (yourGuess(guess) === 1 && compGuess === 1) { 
//         console.log("You chose Rock and the machine chose Rock, it's a draw.")
//     } else if (yourGuess(guess) === 1 && compGuess === 2) {
//         console.log("You chose Rock and the machine chose Paper, the machine wins!")
//     } else if (yourGuess(guess) === 1 && compGuess === 3) {
//         console.log("You chose Rock and the machine chose Scissors, you win!")
//     } else if (yourGuess(guess) === 2 && compGuess === 1) {
//         console.log("You chose Paper and the machine chose Rock, you win!")
//     } else if (yourGuess(guess) === 2 && compGuess === 2) {
//         console.log("You chose Paper and the machine chose Paper, it's a draw.")
//     } else if (yourGuess(guess) === 2 && compGuess === 3) {
//         console.log("You chose Paper and the machine chose Scissors, the machine wins!")
//     } else if (yourGuess(guess) === 3 && compGuess === 1) {
//         console.log("You chose Scissors and the machine chose Rock, the machine wins!")
//     } else if (yourGuess(guess) === 3 && compGuess === 2) {
//         console.log("You chose Scissors and the machine chose Paper, you win!")
//     } else {
//         console.log("You chose Scissors and the machine chose Scissors, it's a draw.")
//     }
// }

let decision = function(yourGuess) {
    if (yourGuess(guess) === compGuess) {
        ties ++
        window.alert(`It's a tie! The scores are: \n Wins: ${wins} \n Losses: ${losses} \n Ties: ${ties}`)
    } else if ((yourGuess(guess) === 1 && compGuess === 3) || (yourGuess(guess) === 2 && compGuess === 1) || (yourGuess(guess) === 3 && compGuess === 2)) {
        wins ++
        window.alert(`You win! The scores are: \n Wins: ${wins} \n Losses: ${losses} \n Ties: ${ties}`)
        /*CREATE A PLAY AGAIN FUNCTION*/
    } else {
        losses ++
        window.alert(`You lost! The scores are: \n Wins: ${wins} \n Losses: ${losses} \n Ties: ${ties}`)
    }
    var playAgain = window.confirm("Play again?")

    if (playAgain) {
        /*NEED A PLAY FUNCTION SO CAN REPEAT*/
    }
}

yourGuess(guess)
decision(yourGuess)
const choices = ["rock", "paper", "scissors"]

function game() {
    // play game
    // play five rounds
    // console based
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
}

function playerChoice() {
    //get input from player
    let input = prompt('Type Rock, Paper, or Scissors');
    while(input == null) {
        input = prompt('Type Rock, Paper, or Scissors');
    }
    // the above keeps the user from hit cancel button and break the game
    input = input.toLowerCase();
    console.log(input);


}

function computerChoice() {
    // get random input from computer
    return choices[Math.floor(Math.random()*choices.length)]
}


function validateInput (choice) {
    if (choice.includes(choice)) {
        return true;
    } else {
        return false;
    }
    }

game();
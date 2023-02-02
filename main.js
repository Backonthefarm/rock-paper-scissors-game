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
    let input = prompt('type rock, paper, or scissors');
    while(input == null) 
    // the above keeps the user from hit cancel button and break the game
    input = input.toLowerCase


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
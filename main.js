const choices = ["rock", "paper", "scissors"];

function game() {
 
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
}

function playerChoice() {

    let input = prompt("Type Rock, Paper, or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    
}

function computerChoice() {
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
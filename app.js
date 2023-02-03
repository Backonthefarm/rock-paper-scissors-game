let playerScore = 0
let compScore = 0

const getComputerChoice  = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * arrOfChoices.length)
    const compChoice = arrOfChoices[randomNum]
    return compChoice
}

const playRound = (playerSelection, computerSelection) => {
    // console.log('1', playerSelection, '2', computerSelection)
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'You tied! You both picked rock'
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'You Tied! You both picked paper'
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'You Tied! You both picked scissors'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You Lost! Paper covers rock'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Win! Rock crushes scissors'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Win! Paper covers rock'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You Lost! Scissors cuts paper'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Win! Scissors cuts paper'  
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lost! Rock crushes scissors'
}
}
const playerSelection = 'rock';


const game = () => {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
    }
}

game()
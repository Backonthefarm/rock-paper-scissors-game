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
        compScore++
        return 'You Lost! Paper covers rock'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        return 'You Win! Rock crushes scissors'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        return 'You Win! Paper covers rock'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++
        return 'You Lost! Scissors cuts paper'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        return 'You Win! Scissors cuts paper'  
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++
        return 'You Lost! Rock crushes scissors'
}
}
const playerSelection = 'rock';


const game = () => {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
    }
}

game()
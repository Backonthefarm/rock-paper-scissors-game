const computerPlay = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * arrOfChoices.length)
    const compChoice = arrOfChoices[randomNum]
    return compChoice
}

console.log(computerPlay())

let userScore = 0
let computerScore = 0

const userScoreElement = document.getElementById("userScore")
const computerScoreElement = document.getElementById("computerScore")
const userChoiceElement = document.getElementById("userChoice")
const computerChoiceElement = document.getElementById("computerChoice")
const resultElement = document.getElementById("result")

const playGame = (userChoice) =>
{
    const choices = ["Rock", "Paper", "Scissors"]

    const randomIndex = Math.floor(Math.random() * choices.length)
    const computerChoice = choices[randomIndex]

    userChoiceElement.innerText = "Your choice: " + userChoice
    computerChoiceElement.innerText = "Computer choice: " + computerChoice

    if(userChoice === computerChoice)
    {
        resultElement.innerText = "It's a Draw! 🤝"
    }
    else if(
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    )
    {
        userScore++
        resultElement.innerText = "You Win! 🎉"
    }
    else
    {
        computerScore++
        resultElement.innerText = "Computer Wins! 🤖"
    }

    userScoreElement.innerText = userScore
    computerScoreElement.innerText = computerScore
}

const resetGame = () =>
{
    userScore = 0
    computerScore = 0

    userScoreElement.innerText = 0
    computerScoreElement.innerText = 0

    userChoiceElement.innerText = "Your choice: -"
    computerChoiceElement.innerText = "Computer choice: -"
    resultElement.innerText = "Make your first move!"
}

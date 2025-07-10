const rock = 1
const paper = 2
const scissor = 3
let computerScore = 0
let playerScore = 0
let tieScore = 0
const rockBtn = document.getElementById("rockBtn")
const paperBtn = document.getElementById("paperBtn")
const scissorBtn = document.getElementById("scissorsBtn")
const resetBtn = document.getElementById("resetbtn")
let computerScoreEl = document.getElementById("computer-score-el")
let playerScoreEl = document.getElementById("player-score-el")
let resultsEl = document.getElementById("results-el")
let computerPickEl = document.getElementById("computer-pick-el")
let tieEl = document.getElementById("tie-el")
rockBtn.addEventListener("click", function r() {
    console.log("Action Button Triggered - ROCK")
    pick = Math.floor(Math.random() * 3 + 1)
    if (pick === 2) {
        resultsEl.textContent = "You lost"
        computerScore += 1
        computerScoreEl.textContent = "Computer: " + computerScore
    } if (pick === 3) {
        resultsEl.textContent = "You Won"
        playerScore += 1
        playerScoreEl.textContent = "You: " + playerScore
    } if (pick === 1) {
        resultsEl.textContent = "Tie"
        tieScore += 1
        tieEl.textContent = "Ties: " + tieScore
    }
    if (pick === 1) {
        computerPickEl.textContent = "Rock"
    } if (pick === 2) {
        computerPickEl.textContent = "Paper"
    } if (pick === 3) {
        computerPickEl.textContent = "Scissor"
    } } )
scissorBtn.addEventListener("click", function s() {
    console.log("Action Button Triggered - SCISSOR")
    pick = Math.floor(Math.random() * 3 + 1)
    if (pick === 1) {
        resultsEl.textContent = "You lost"
        computerScore += 1
        computerScoreEl.textContent = "Computer: " + computerScore
    } if (pick === 2) {
        resultsEl.textContent = "You Won"
        playerScore += 1
        playerScoreEl.textContent = "You: " + playerScore
    } if (pick === 3) {
        resultsEl.textContent = "Tie"
        tieScore += 1
        tieEl.textContent = "Ties: " + tieScore
    }
    if (pick === 1) {
        computerPickEl.textContent = "Rock"
    } if (pick === 2) {
        computerPickEl.textContent = "Paper"
    } if (pick === 3) {
        computerPickEl.textContent = "Scissor"
    } } )
paperBtn.addEventListener("click", function s() {
    console.log("Action Button Triggered - PAPER")
    pick = Math.floor(Math.random() * 3 + 1)
    if (pick === 3) {
        resultsEl.textContent = "You lost"
        computerScore += 1
        computerScoreEl.textContent = "Computer: " + computerScore
    } if (pick === 1) {
        resultsEl.textContent = "You Won"
        playerScore += 1
        playerScoreEl.textContent = "You: " + playerScore
    } if (pick === 2) {
        resultsEl.textContent = "Tie"
        tieScore += 1
        tieEl.textContent = "Ties: " + tieScore
    }
    if (pick === 1) {
        computerPickEl.textContent = "Rock"
    } if (pick === 2) {
        computerPickEl.textContent = "Paper"
    } if (pick === 3) {
        computerPickEl.textContent = "Scissor"
    } } )
resetBtn.addEventListener("click", function() {
    console.log("Action Button Triggered - RESET ALL")
    computerScore = 0
    playerScore = 0
    tieScore = 0
    computerScoreEl.textContent = "Computer: 0"
    playerScoreEl.textContent = "You: 0"
    tieEl.textContent = "Ties: 0"
    resultsEl.textContent = ""
    computerPickEl.textContent = ""
})


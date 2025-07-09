const rock = 1
const paper = 2
const scissor = 3
const rockBtn = document.getElementById("rockBtn")
const paperBtn = document.getElementById("paperBtn")
const scissorBtn = document.getElementById("scissorsBtn")
let resultsEl = document.getElementById("results-el")
let computerPickEl = document.getElementById("computer-pick-el")
rockBtn.addEventListener("click", function r() {
    pick = Math.floor(Math.random() * 3 + 1)
    if (pick === 2) {
        resultsEl.textContent = "You lost"
    } if (pick === 3) {
        resultsEl.textContent = "You Won"
    } if (pick === 1) {
        resultsEl.textContent = "Tie"
    }
    if (pick === 1) {
        computerPickEl.textContent = "Rock"
    } if (pick === 2) {
        computerPickEl.textContent = "Paper"
    } if (pick === 3) {
        computerPickEl.textContent = "Scissor"
    }
} )
scissorBtn.addEventListener("click", function s() {
    pick = Math.floor(Math.random() * 3 + 1)
    if (pick === 1) {
        resultsEl.textContent = "You lost"
    } if (pick === 2) {
        resultsEl.textContent = "You Won"
    } if (pick === 3) {
        resultsEl.textContent = "Tie"
    }
    if (pick === 1) {
        computerPickEl.textContent = "Rock"
    } if (pick === 2) {
        computerPickEl.textContent = "Paper"
    } if (pick === 3) {
        computerPickEl.textContent = "Scissor"
    }
} )
paperBtn.addEventListener("click", function s() {
    pick = Math.floor(Math.random() * 3 + 1)
    if (pick === 3) {
        resultsEl.textContent = "You lost"
    } if (pick === 1) {
        resultsEl.textContent = "You Won"
    } if (pick === 2) {
        resultsEl.textContent = "Tie"
    }
    if (pick === 1) {
        computerPickEl.textContent = "Rock"
    } if (pick === 2) {
        computerPickEl.textContent = "Paper"
    } if (pick === 3) {
        computerPickEl.textContent = "Scissor"
    }
} )


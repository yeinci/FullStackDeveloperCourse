const textBoxEl = document.getElementById("text-box")
const playerTitleEl = document.getElementById("player-title")
const playerCardsEl = document.getElementById("player-cards")
const playerSumEl = document.getElementById("player-sum")
const dealerCardsEl = document.getElementById("dealer-cards")
const dealerSumEl = document.getElementById("dealer-sum")
const betInputEl = document.getElementById("bet-input")
const betAmountEl = document.getElementById("bet-amount")
const hitButtonEl = document.getElementById("hit-btn")
const standButtonEl = document.getElementById("stand-btn")
const nameInputEl = document.getElementById("name-input")
const nameAndBalanceEl = document.getElementById("name-and-balance")

let name = ""
let balance = 100
let bet = 0
let isGameOn = false
let deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]
let playerSum = 0
let playerAceCount = 0
let dealerSum = 0
let dealerAceCount = 0

betInputEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        betEntered()
    }
})

function betEntered() {
    bet = betInputEl.value
    if (bet > balance || bet <= 0) {
        textBoxEl.textContent = "Please enter valid bet amount"
        return
    }
    gameStarted()
}

hitButtonEl.addEventListener("click", function() {
    hitPressed()
})

standButtonEl.addEventListener("click", function() {
    standPressed()
})

nameInputEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        nameEntered()
    }
})

function nameEntered() {
    if (nameInputEl.value.trim() === "")  {
        textBoxEl.textContent = "Please enter valid name"
        return
    }
    name = nameInputEl.value
    
    nameAndBalanceEl.textContent = name + ": " + balance + "$"
    playerTitleEl.textContent = name
    nameInputEl.style.display = "none"
}

function gameStarted() {
    isGameOn = true
    deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]
    playerSum = 0
    playerAceCount = 0
    dealerSum = 0
    dealerAceCount = 0
    playerCardsEl.textContent = "Cards:"
    dealerCardsEl.textContent = "Cards:"
    playerSumEl.textContent = "Sum:"
    dealerSumEl.textContent = "Sum:"
    textBoxEl.textContent = "Game Started, Good luck!"
    betAmountEl.textContent = "Bet amount: " + bet + "$"
    betInputEl.hidden = true
    changeBalance(-bet)

    drawCard("player")
    drawCard("player")
    isOver21("player")

    drawCard("dealer")
    drawCard("dealer")
    isOver21("dealer")
}

function drawCard(x) {
    let index = Math.floor(Math.random() * deck.length);
    let card = deck.splice(index, 1)[0];
    let value = 0
    let isAce = false

    if (card === "K" || card === "Q" || card === "J") value = 10
    else if (card === "A") {
        isAce = true
        value = 11
    }
    else value = Number(card)
    
    if (x === "player") {
        playerCardsEl.textContent += " " + card
        playerSum += value
        if (isAce) playerAceCount++
        playerSumEl.textContent = "Sum: " + playerSum
        return
    }
    dealerCardsEl.textContent += " " + card
    dealerSum += value
    if (isAce) dealerAceCount++
    dealerSumEl.textContent = "Sum: " + dealerSum
}

function isOver21(x) {
    if (x === "player") {
        if (playerSum > 21) {
            if (playerAceCount > 0) {
                playerAceCount--
                playerSum -= 10
                playerSumEl.textContent = "Sum: " + playerSum
                return isOver21(x)
            }
            return gameLost()
        }
    }
    else if (dealerSum > 21) {
        if (dealerAceCount > 0) {
            dealerAceCount--
            dealerSum -= 10
            dealerSumEl.textContent = "Sum: " + dealerSum
            return isOver21(x)
        }
        return gameWon()
    }
}

function hitPressed() {
    if (!isGameOn) {
        textBoxEl.textContent = "Game didn't started yet!"
        return
    }
    drawCard("player")
    isOver21("player")
}

function standPressed() {
    if (!isGameOn) {
        textBoxEl.textContent = "Game did'nt started yet!"
        return
    }
    while(dealerSum < playerSum) {
        drawCard("dealer")
        isOver21("dealer")
    }
    if (dealerSum === playerSum) {
        gameDraw()
        return
    }
    if (isGameOn) gameLost()
}

function gameLost() {
    gameEnded()
    textBoxEl.textContent = "Game Ended! You've lost " + bet + "$"
}

function gameWon() {
    gameEnded()
    textBoxEl.textContent = "Game Ended! You've won " + Number(bet * 2) + "$"
    changeBalance(bet * 2)
}

function gameDraw() {
    gameEnded()
    textBoxEl.textContent = "Game Ended! Draw! Your bet was returned."
    changeBalance(bet)
}

function gameEnded() {
    isGameOn = false
    betInputEl.hidden = false
}

function changeBalance(x) {
    balance += Number(x)
    nameAndBalanceEl.textContent = name + ": " + balance + "$"
}
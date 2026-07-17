const playerGuess = 3
const correctAnswer = 6

const message = playerGuess === correctAnswer ? "Correct!"
    : playerGuess > correctAnswer ? "Too High!"
    : "Too Low!"

console.log(message)

//

const dreamHoliday = {
    destination: "Japan",
    activity: "experience the local culture",
    accommodation: "hotel",
    companion: "my brother"
}

const {destination, activity, accommodation, companion} = dreamHoliday

console.log(`I would like to go to ${destination} to ${activity}. I'd sleep in a ${accommodation} and hang out with ${companion} all day`)

//

const stopTimerBtn = document.getElementById("stop-timer-btn")

function logAnswer(answer, points) {
    console.log(`The answer is ${answer} of corse! If you got that right, give yourself ${points} points.`)
}

console.log("What is the capital of Peru?")
const questionTimer = setTimeout(logAnswer, 3000, "Lima", 10)

stopTimerBtn.addEventListener("click", function() {
    clearTimeout(questionTimer)
})

//

import math from "./data.js"

console.log(math.add(12, 20) + " " + math.subtract(40, 8) + " " + math.multiply(8, 4))

//

const dateSnapshot = new Date()

console.log(`Copyright ${dateSnapshot.getFullYear()} all rights reserved`)

//

import  { getStockData } from "./stockData.js"

const companyName = document.getElementById("company-name")
const companySymbol = document.getElementById("company-symbol")
const companyPrice = document.getElementById("company-price")
const currentTime = document.getElementById("current-time")

let previousPrice = -1;

function refresh() {
    const stockData = getStockData()

    const currentPrice = stockData.price
    let arrow = '→'
    if (previousPrice == -1 || currentPrice === previousPrice) arrow = "→"
    else if (currentPrice < previousPrice)arrow = "↘"
    else arrow = "↗"
    previousPrice = currentPrice

    companyName.textContent = `Name: ${stockData.name}`
    companySymbol.textContent = `Symbol: ${stockData.symbol}`
    companyPrice.textContent = `Price: ${currentPrice} ${arrow}`
    currentTime.textContent = `Time: ${stockData.time}`
}

refresh()
setInterval(refresh, 1500)

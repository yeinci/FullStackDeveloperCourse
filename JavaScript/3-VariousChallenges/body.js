let firstName = "Yunus Emre"
let lastName = "İNCİ"
let fullName = firstName + " " + lastName

console.log(fullName)

//

let name = "Linda"
let greeting = "Hi there"

function greetLinda() {
    console.log(greeting + ", " + name + "!")
}

greetLinda()

//

let points = 3

function add3points() {
    points += 3
}

function removalPoint() {
    points--
}

add3points()
add3points()
add3points()
removalPoint()
removalPoint()

console.log(points)

//

let errorEl = document.getElementById("error")
let errorMessage = "Something went wrong, please try again"

function purchase() {
    errorEl.textContent = errorMessage;
}

//

let number1El = document.getElementById("number-1")
let number2El = document.getElementById("number-2")
let resultEl = document.getElementById("result")

let number1 = 0
let number2 = 0

function refresh() {
    number1 = Number(number1El.value)
    number2 = Number(number2El.value)
}

function resultChanged(value) {
    resultEl.textContent = "Result: " + value
}

function add() {
    refresh()
    resultChanged(number1 + number2)
}
function subtract() {
    refresh()
    resultChanged(number1 - number2)
}
function multiply() {
    refresh()
    resultChanged(number1 * number2)
}
function divide() {
    refresh()
    resultChanged(number1 / number2)
}
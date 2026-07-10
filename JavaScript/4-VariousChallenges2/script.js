let person = {
    name: "Yunus",
    age: 21,
    country: "Turkey"
};

function logData() {
    let message = person.name + " is " + person.age + " years old and lives in " + person.country
    console.log(message)
}

logData()

// 

let age = 15

if (age < 6) console.log("free")
else if (age < 18) console.log("child discount")
else if (age < 27) console.log("student discount")
else if (age < 67) console.log("full price")
else console.log("elder discount")

//

let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

function logCountries() {
    for (let i = 0; i < largeCountries.length; i++) {
        console.log("- " + largeCountries[i])
    }
}

logCountries()

//

largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

largeCountries.pop()
largeCountries.push("Pakistan")
largeCountries.shift()
largeCountries.unshift("China")

logCountries()

//

let dayOfTheMonth = 13
let weekday = "Friday"

if (dayOfTheMonth === 13 && weekday === "Friday") console.log("spooky")

//

let hands = ["rock", "paper", "scissor"]

function randomHand() {
    return hands[Math.floor(Math.random() * 3)]
}

console.log(randomHand())

//

let fruits = ["Apple", "Orange", "Apple", "Apple", "Orange"]
let apples = []
let oranges = []

while (fruits.length != 0) {
    let fruit = fruits.shift()
    if (fruit === "Apple") {
        apples.push(fruit)
    }
    else {
        oranges.push(fruit)
    }
}

console.log(apples)
console.log(oranges)

//
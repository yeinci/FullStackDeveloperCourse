const containerEl = document.getElementById("container")

containerEl.innerHTML = "<button id=\"buy-btn\">Buy!</button>"

const buyBtn = document.getElementById("buy-btn")

buyBtn.addEventListener("click", function() {
    console.log("buyn't")
})

//

const recipient = "James"
const sender = "Yunus"

let email = "Hey " + recipient + "! How is it going? Cheers " + sender
console.log(email)

email = `Hey ${recipient}! How is it going? Cheers ${sender}`
console.log(email)

//

function add(x, y) {
    return x + y
}

console.log(add(3, 4))

//

let myArray = [42, 54]

function getFirst(arr) {
    return arr[0]
}

console.log(getFirst(myArray))

//

let data = [
    {
        player: "Jane",
        score: 52
    },
    {
        player: "Mark",
        score: 41
    }
]

const logBtn = document.getElementById("log-btn")

logBtn.addEventListener("click", function() {
    console.log(data[0].score)
})

//
let myDesc = "best fruits"
let myArray2 = ["Apple", "Plum", "Cherry", "Melon"]

function generateSentence(desc, arr) {
    let len = arr.length
    let sentence = `The ${len} ${desc} are;`
    for (let i = 0; i < len; i++) {
        sentence += " " + arr[i]
        if (i != len - 1) {
            sentence += ","
        }
    }
    return sentence
}

console.log(generateSentence(myDesc, myArray2))
console.log(generateSentence("highest mountains", ["Mount Everest", "K2"]))

//

const container2 = document.getElementById("container2")

container2.innerHTML = `
<h1>Stunt Show Trio</h1>
<img src="images/janet.webp" alt="janet brawl stars">
<img src="images/stu.webp" alt="stu brawl stars">
<img src="images/bonnie.webp" alt="bonnie brawl stars">
`

//

const money = "420.929883791013101341"
console.log(Number(money).toFixed(2))
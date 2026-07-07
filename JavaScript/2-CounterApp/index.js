let saveLogEl = document.getElementById("save-log")
let countEl = document.getElementById("count-of-people")

let count = 0
let saveLog = "Previous Entries: "

function increment() {
    count++
    countEl.textContent = count
}

function save() {
    saveLog += count + " - "
    saveLogEl.textContent = saveLog
    count = 0
    countEl.textContent = count
}


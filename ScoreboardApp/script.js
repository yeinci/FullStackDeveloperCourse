let timerEl = document.getElementById("timer")
let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")

let startTime = 0;
let interval = 0

let homeScore = 0
let guestScore = 0

function updateTimer() {
    const currentTime = performance.now();
    const totalElapsed = currentTime - startTime;

    const minutes = Math.floor(totalElapsed / 60000);
    const seconds = Math.floor((totalElapsed % 60000) / 1000);
    const milliseconds = Math.floor(totalElapsed % 1000);

    timerEl.textContent =
        String(minutes).padStart(2, "0") + " : " +
        String(seconds).padStart(2, "0") + " . " +
        String(milliseconds).padStart(3, "0");
}

startTime = performance.now();
interval = setInterval(updateTimer, 10);

function homePlus1() {
    homeScoreEl.textContent = ++homeScore
}

function homePlus2() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function homePlus3() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function guestPlus1() {
    guestScoreEl.textContent = ++guestScore
}

function guestPlus2() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function guestPlus3() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function restart() {
    startTime = performance.now()
    timerEl.textContent = "00 : 00 . 000"
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
}
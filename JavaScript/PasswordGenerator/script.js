const generateBtnEl = document.getElementById("generate-btn")
const copyBtnEl = document.getElementById("copy-btn")
const passwordEl = document.getElementById("password")

const passwordChars = [
    ..."abcdefghijklmnopqrstuvwxyz",
    ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    ..."0123456789",
    ..."!@#$%^&*()-_=+[]{}|;:'\",.<>/?`~\\"
]

let password = ""

generateBtnEl.addEventListener("click", function() {
    generatePassword()
})

copyBtnEl.addEventListener("click", function() {
    copyPassword()
})

function generatePassword() {
    password = ""
    for (let i = 0; i < 15 ; i++) {
        password += passwordChars[Math.floor(Math.random() * passwordChars.length)]
    }
    passwordEl.textContent = password
}

function copyPassword() {
    copyBtnEl.textContent = "Copied!"
    navigator.clipboard.writeText(password)
}
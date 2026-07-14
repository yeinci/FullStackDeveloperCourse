const valueInput = document.getElementById("value-input")
const convertBtn = document.getElementById("convert-btn")
const lengthResult = document.getElementById("length-result")
const volumeResult = document.getElementById("volume-result")
const massResult = document.getElementById("mass-result")

const meterToFeetConversionRate = 3.28084
const literToGallonConversionRate = 0.26417
const kilogramToPoundConversionRate = 2.20462

convertBtn.addEventListener("click", function() {
    convert()
})

function convert() {
    console.log("button pressed")
    if (!valueInput.value) return
    let metricValue = Number(valueInput.value)
    let imperialFeet = (metricValue * meterToFeetConversionRate).toFixed(2)
    let imperialGallon = (metricValue * literToGallonConversionRate).toFixed(2)
    let imperialPound = (metricValue * kilogramToPoundConversionRate).toFixed(2)

    lengthResult.textContent = `${metricValue} Meters = ${imperialFeet} Feet`
    volumeResult.textContent = `${metricValue} Liters = ${imperialGallon} Gallons`
    massResult.textContent = `${metricValue} Kilograms = ${imperialPound} Pounds`
}
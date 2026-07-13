const inputEl = document.getElementById("input-el")
const inputBtnEl = document.getElementById("input-btn")
const tabBtnEl = document.getElementById("tab-btn")
const deleteBtnEl = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")

let myLeads = []
const leadsFromLocalStorage = localStorage.getItem("myLeads")
if (leadsFromLocalStorage) {
    try {
        myLeads = JSON.parse(leadsFromLocalStorage)
        renderLeads(myLeads)
    } catch (error) {
        console.error("Bozuk localStorage verisi:", error)
        localStorage.removeItem("myLeads")
    }
}

inputBtnEl.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads(myLeads)
})

tabBtnEl.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderLeads(myLeads)
    })
})

deleteBtnEl.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    renderLeads(myLeads)
})

function renderLeads(leads) {

    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target="_blank" rel="noopener noreferrer" href="${leads[i]}">
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

export function getStockData() {
    return {
        name: "QtechAI",
        symbol: "QTA",
        price: (Math.random() * 3).toFixed(2),
        time: getTime()
    }
}

function getTime() {
    const now = new Date()
    return now.toTimeString().slice(0, 8)
}
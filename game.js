function incrementCounter() {
    let countElement = document.getElementById("count") ;
    let currentCount = parseInt(countElement.innerText) ;
    countElement.innerText = currentCount + 1 ;
}

function saveCounter() {
    let saveEl = document.getElementById("savedCounts") ;
    let countElement = document.getElementById("count") ;
    let currentCount = countElement.innerText ;
    saveEl.textContent += currentCount + "   -   ";
}

function resetCounter() {
    let saveEl = document.getElementById("savedCounts") ;
    let countElement = document.getElementById("count") ;
    countElement.innerText = 0 ;
}
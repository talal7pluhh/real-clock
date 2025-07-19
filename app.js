const minuteEl = document.getElementById("minute");
const hourEl = document.getElementById("hour");
const secondEl = document.getElementById("second");
const amPm = document.getElementById("ampm");

function realClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"

    if (h > 12) {
        h -= 12
        ampm = "PM"
    }

    h = h > 10 ? "0" + h : h;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;

    setTimeout(()=>{
    realClock();
    }, 998)
}

realClock();
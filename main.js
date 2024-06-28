let btn = document.querySelector(".btn")
let btn1 = document.querySelector(".btn1")
let box = document.querySelector(".box")
let clock = document.querySelector(".clock")
let clock1 = document.querySelector(".clock1")
let box1 = document.querySelector(".box1")
let screen = document.querySelector(".screen")
let screen1 = document.querySelector(".screen1")
let screen2 = document.querySelector(".screen2")
let screen3 = document.querySelector(".screen3")
let screen4 = document.querySelector(".screen4")
let q1 = document.querySelector(".q1")
let q2 = document.querySelector(".q2")
let f1 = document.querySelector(".f1")
let l11 = document.querySelector(".l11")
btn.addEventListener("click", () => {
    box.style.display = "none"
    box1.style.display = "block"
    box1.style.marginLeft = "38px"
    btn1.style.position = "relative"
    btn1.style.top = "-65px"
    btn1.style.left = "-271px"
})
f1.addEventListener("click", () => {
    screen4.style.display = "none"
    clock.style.display = "block"
})
// function clock() {
//     const newData2 = new Date()

//     let hour2 = newDate2.getHours(),
//     let minuet = newDate2.getHours(),
//     let hour2 = newDate2.getHours(),
// }
const startButton = document.getElementById('startButton');
const shopButton = document.getElementById('shopButton');
const h1 = document.getElementById('h1');
let count = 0
let intervalId;

startButton.addEventListener("click", () => {
    intervalId = setInterval(() => {
        h1.innerHTML = count;
        count++;
    }, 1000);
});

shopButton.addEventListener("click", () => {
    clearInterval(intervalId)
})

q1.addEventListener("click", () => {
    clock.style.display = "block"
    clock1.style.display = "none"
})
q2.addEventListener("click", () => {
    clock1.style.display = "block"
    clock.style.display = "none"
})

function clocks() {
    const newDate2 = new Date()

    let hour2 = newDate2.getHours(),
        minute2 = newDate2.getMinutes(),
        second2 = newDate2.getSeconds();

        if (hour2 < 10) {
            hour2 = '0' + hour2
        }
        if (minute2 < 10) {
            minute2 = '0' + minute2
        }
        if (second2 < 10) {
            second2 = '0' + second2
        }

        let nowTime = document.querySelector(".nowTime")
        nowTime.innerHTML = `${hour2} : ${minute2} : ${second2}`
        setInterval(clocks, 1000);
}

clocks()

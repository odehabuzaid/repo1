let countDownDate = new Date("Jul 6, 2021 10:00:00").getTime();
let x = setInterval(function() {
let now = new Date().getTime();
let distance = countDownDate - now;
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
 let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);
document.getElementById("timeLeft").innerHTML = `<h1>301 Entrance Exam</h1><br> ` + days + "d " + hours + "h "
 + minutes + "m " + seconds + "s ";

if (distance < 0) {
clearInterval(x);
document.getElementById("timeLeft").innerHTML = "Time's Up";
}
}, 1000);
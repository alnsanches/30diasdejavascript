const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1}, 00:00:00`);


// update countdowntime 

function updateCountdown() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const calcDays = Math.floor(diff / 1000 / 60 / 60 / 24);
    const calcHours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const calcMinutes = Math.floor(diff / 1000 / 60) % 60;
    const calcSeconds = Math.floor(diff / 1000) % 60;

    days.innerHTML = calcDays;
    hours.innerHTML = calcHours < 10 ? '0' + calcHours : calcHours;
    minutes.innerHTML = calcMinutes < 10 ? '0' + calcMinutes : calcMinutes;
    seconds.innerHTML = calcSeconds < 10 ? '0' + calcSeconds : calcSeconds;
}

setInterval(updateCountdown, 1000);
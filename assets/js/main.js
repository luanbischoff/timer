const clockElement = document.querySelector('.relogio');

let seconds = 0;
let timer;

function createSeconds(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC',
    });
}
function startClock() {
    clearInterval(timer);
    timer = setInterval(function () {
        seconds++;
        clockElement.innerText = createSeconds(seconds);
    }, 1000);
    clockElement.classList.remove('pausado');
}
function pauseClock() {
    clearInterval(timer);
    clockElement.classList.add('pausado');
}
function resetClock() {
    clearInterval(timer);
    seconds = 0;
    clockElement.classList.remove('pausado');
    clockElement.innerText = '00:00:00';
}

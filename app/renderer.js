// DOM Elements
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const closeButton = document.getElementById('close');
const clickRate = document.getElementById('clicks');
const clickCount = document.getElementById('clicksCount');
const clickButton = document.getElementById('clickme');

let interval = null;

function startClick() {
    // Function that make mouse clicks every 5 seconds
    interval = setInterval(() => {
        clickButton.click();
        clickCount.innerText = parseInt(clickCount.innerText) + 1;
        ;
    }, clickRate.value * 1000);
}

function quit() {
    // Close the app
    window.close();
}

function stopClick() {
    clearInterval(interval);
    clickCount.innerText = 0;
}

// Event Listeners
startButton.addEventListener('click', startClick);
stopButton.addEventListener('click', stopClick);
closeButton.addEventListener('click', quit);

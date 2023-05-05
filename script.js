const clock = document.getElementById('clock');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

let timeLeft = 60;
let timer;

function countdown() {
	if (timeLeft === 0) {
		clearInterval(timer);
		alert('Time\'s up!');
	} else {
		clock.innerHTML = timeLeft;
		timeLeft--;
	}
}

startButton.addEventListener('click', function() {
	timer = setInterval(countdown, 1000);
});

stopButton.addEventListener('click', function() {
	clearInterval(timer);
});

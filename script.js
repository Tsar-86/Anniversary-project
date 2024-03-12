const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minsElement = document.getElementById('mins');
const secondsElement = document.getElementById('seconds');

const anniversary = "04 Nov 2021";

let countdown = () => {
	// const anniversaryDate = new Date(anniversary);
	// const currentDate = new Date();
	// const totalSeconds = (anniversaryDate - currentDate) / 1000;

	const days = Math.floor(totalSeconds / 3600 / 24);
	const hours = Math.floor(totalSeconds / 3600) % 24;
	const mins = Math.floor(totalSeconds / 60) % 60;
	const seconds = Math.floor(totalSeconds) % 60;

	daysElement.innerHTML = days;
	hoursElement.innerHTML = formatTime(hours);
	minsElement.innerHTML = formatTime(mins);
	secondsElement.innerHTML = formatTime(seconds);
};

let formatTime = (time) => time < 10 ? `0${time}` : time;

countdown();

setInterval(countdown, 1000);
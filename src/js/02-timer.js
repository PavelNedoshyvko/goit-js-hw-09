import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
	startBtn: document.querySelector('[data-start]'),
	days: document.querySelector('[data-days]'),
	hours: document.querySelector('[data-hours]'),
	minutes: document.querySelector('[data-minutes]'),
	seconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.disabled = true;

flatpickr("#datetime-picker", {
	enableTime: true,
	time_24hr: true,
	defaultDate: new Date(),
	minuteIncrement: 1,
	onClose(selectedDates) {
		if (selectedDates[0] < new Date()) {
			Notify.warning("Please choose a date in the future", {
				warning: {
    			background: '#ff5e1a',
    			textColor: '#000',
    			notiflixIconColor: '#000',
    			fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    			backOverlayColor: 'rgba(238,191,49,0.2)',
  				},
				width: '550px',
				fontSize: '32px',
				position: 'center-center',
			});
			return;
		}
		refs.startBtn.disabled = false;
		refs.startBtn.addEventListener('click', onStartBtnClick);

		function onStartBtnClick() {
	const intervalId = setInterval(() => {
		const ms = selectedDates[0] - new Date();
		const { days, hours, minutes, seconds } = convertMs(ms);
		refs.days.textContent = addLeadingZero(days);
		refs.hours.textContent = addLeadingZero(hours);
		refs.minutes.textContent = addLeadingZero(minutes);
		refs.seconds.textContent = addLeadingZero(seconds);
		if (ms < 1000) {
			clearInterval(intervalId);
		}
	}, 1000);
		};
	},
});


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
	return value.toString().padStart(2, '0');
}
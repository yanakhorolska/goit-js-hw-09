import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    startTimerBtn: document.querySelector('[data-start]'),
    daysCounter: document.querySelector('[data-days]'),
    hoursCounter: document.querySelector('[data-hours]'),
    minutesCounter: document.querySelector('[data-minutes]'),
    secondsCounter: document.querySelector('[data-seconds]'),
};

const currentTime = Date.now();
console.log(currentTime);


let selectedDate = null;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= Date.now()) {
            refs.startTimerBtn.setAttribute('disabled', 'disabled');
            Notiflix.Notify.failure('Please, choose date in future!');
        } else {
            refs.startTimerBtn.removeAttribute('disabled');
            Notiflix.Notify.success('Your date has been added');
            selectedDate = selectedDates[0];
        }
        
},
};





flatpickr('#datetime-picker', options);

refs.startTimerBtn.addEventListener('click', onStartTimer);


let intervalId = null;

function onStartTimer() {
    Notiflix.Notify.success('Your timer is running');
    refs.startTimerBtn.setAttribute("disabled", "disabled");
    let differenceBetweenDates = selectedDate - currentTime;

    intervalId = setInterval(() => {
        differenceBetweenDates -= 1000;
        if (differenceBetweenDates < 0) {
            clearInterval(intervalId);
            return;
        }
    const convertedTime = convertMs(differenceBetweenDates);
        refs.daysCounter.textContent = convertedTime.days;
        refs.hoursCounter.textContent = convertedTime.hours;
        refs.minutesCounter.textContent = convertedTime.minutes;
        refs.secondsCounter.textContent = convertedTime.seconds;
    }, 1000);
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

  // Remaining days
    const days = Math.floor(ms / day);
  // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}


import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const picker = document.getElementById('datetime-picker');
const startBtn = document.querySelector('[data-start]');
const dateRefs = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
let userSelectedDate = null;
let intervalId = null;
startBtn.disabled = true;

const countTime = () => {
  const delta = userSelectedDate - Date.now();
  if (delta <= 0) return;

  const days = delta / 86400000;
  const hrs = (delta / 3600000) % 24;
  const mins = (delta / 60000) % 60;
  const secs = (delta / 1000) % 60;

  dateRefs.days.textContent = String(Math.floor(days)).padStart(2, '0');
  dateRefs.hours.textContent = String(Math.floor(hrs)).padStart(2, '0');
  dateRefs.minutes.textContent = String(Math.floor(mins)).padStart(2, '0');
  dateRefs.seconds.textContent = String(Math.floor(secs)).padStart(2, '0');
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() - Date.now() > 0) {
      userSelectedDate = selectedDates[0].getTime();
      startBtn.disabled = false;
    } else {
      iziToast.error({
        title: 'ERROR!',
        message: 'Please choose a date in the future',
        position: 'center',
      });
      startBtn.disabled = true;
    }
  },
};

flatpickr(picker, options);

startBtn.addEventListener('click', () => {
  if (userSelectedDate !== null) {
    startBtn.disabled = true;
    picker.disabled = true;

    intervalId = setInterval(() => {
      countTime();

      if (userSelectedDate <= Date.now()) {
        clearInterval(intervalId);

        ['days', 'hours', 'minutes', 'seconds'].forEach(
          key => (dateRefs[key].textContent = '00')
        );

        startBtn.disabled = false;
        picker.disabled = false;
      }
    }, 1000);
  }
});

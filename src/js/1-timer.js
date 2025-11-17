// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const picker = document.getElementById('datetime-picker');
let userSelectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const dateNow = Date.now();

    if (selectedDates[0].getTime() - dateNow > 0) {
      userSelectedDate = selectedDates[0].getTime();
    }
    console.log(userSelectedDate);
  },
};

flatpickr(picker, options);

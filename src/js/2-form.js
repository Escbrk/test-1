const localKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const email = e.currentTarget.email.value;
  const message = e.currentTarget.message.value;

  form.reset();
  localStorage.removeItem(localKey);

  console.log({
    email,
    message,
  });
});

form.addEventListener('input', e => {
  const email = e.currentTarget.email.value;
  const message = e.currentTarget.message.value;

  const jsonData = JSON.stringify({ email, message });

  localStorage.setItem(localKey, jsonData);
});

if (localStorage.getItem(localKey)) {
  const email = JSON.parse(localStorage.getItem(localKey)).email;
  const message = JSON.parse(localStorage.getItem(localKey)).message;

  form.email.value = email;
  form.message.value = message;
}

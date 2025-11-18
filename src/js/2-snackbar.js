import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

iziToast.settings({
  icon: 'none',
  position: 'center',
});

const refs = {
  form: document.querySelector('.form'),
  btn: document.querySelector('[type="submit"]'),
};

refs.btn.addEventListener('click', e => {
  e.preventDefault();

  const formData = new FormData(refs.form);
  const msValue = parseInt(formData.get('delay'));
  const state = formData.get('state');

  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        res(`✅ Fulfilled promise in ${msValue}ms`);
      }

      if (state === 'rejected') {
        rej(`❌ Rejected promise in ${msValue}ms`);
      }
    }, msValue);
  });

  promise
    .then(val =>
      iziToast.success({
        message: val,
      })
    )
    .catch(err =>
      iziToast.error({
        message: err,
      })
    );

  refs.form.reset();
});

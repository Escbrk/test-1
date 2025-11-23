// const refs = {
//   clockFace: document.getElementById('clock-face'),
//   start: document.getElementById('start'),
//   stop: document.getElementById('stop'),
// };

// class Timer {
//   constructor({ onTick }) {
//     this.onTick = onTick;
//     this.interval = null;
//   }

//   start() {
//     const startTime = Date.now();

//     this.interval = setInterval(() => {
//       const currentTime = Date.now();
//       const delta = currentTime - startTime;
//       const time = this.getTimerComponents(delta);

//       this.onTick(time);
//     }, 1000);
//   }

//   stop() {
//     clearInterval(this.interval);
//     const time = this.getTimerComponents(0);
//     this.onTick(time);
//   }

//   getTimerComponents(time) {
//     const hrs = this.pad(Math.floor((time % 86400000) / 3600000));

//     const mins = this.pad(Math.floor((time % 3600000) / 60000));

//     const secs = this.pad(Math.floor((time % 60000) / 1000));

//     return { hrs, mins, secs };
//   }

//   pad(value) {
//     return String(value).padStart(2, '0');
//   }
// }

// const updateClockFace = ({ hrs, mins, secs }) => {
//   refs.clockFace.textContent = `${hrs}:${mins}:${secs}`;
// };

// const timer = new Timer({ onTick: updateClockFace });

// refs.start.addEventListener('click', () => timer.start());
// refs.stop.addEventListener('click', () => timer.stop());

// const prepareDish = new Promise((res, rej) => {
//   const passed = Math.random() > 0.5;

//   setTimeout(() => {
//     if (passed) {
//       res('Succes✅');
//     }

//     rej('Error❌');
//   }, 1500);
// });

// prepareDish.then(val => console.log(val)).catch(err => console.log(err));

//!=========

// const prepareDish = dish => {
//   const passed = Math.random() > 0.5;

//   return passed ? Promise.resolve('Succes✅') : Promise.reject('Error❌');
// };

// prepareDish('fish')
//   .then(val => console.log(val))
//   .catch(err => console.log(err));

//!=========

// const refs = {
//   result: document.getElementById('result'),
//   startBtn: document.getElementById('start-btn'),
//   container: document.querySelector('.container'),
// };

// refs.startBtn.addEventListener('click', () => {
//   const promises = [...refs.container.children].map(item => {
//     item.textContent = '';
//     refs.result.textContent = '';

//     // return new Promise((res, rej) =>
//     //   Math.random() > 0.5 ? res('🤑') : rej('😈')
//     // );

//     return Math.random() > 0.5 ? Promise.resolve('🤑') : Promise.reject('😈');
//   });

//   Promise.allSettled(promises).then(items => {
//     const isWinner =
//       items.every(({ status }) => status === 'fulfilled') ||
//       items.every(({ status }) => status === 'rejected');

//     items.forEach((item, i) => {
//       setTimeout(() => {
//         refs.container.children[i].textContent = item.value || item.reason;

//         if (i === items.length - 1) {
//           refs.result.textContent = isWinner
//             ? 'Winner!!! 💰💲💸'
//             : 'Looooser💩';
//         }
//       }, 1000 * (i + 1));
//     });
//   });
// });

//!=========
// 1

// https://compariton.net/r/v1?u=bi&d=chatgpt.com&s1=s2gsrwyqexoy00000000 - Virus

//!=========


import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
	form: document.querySelector('.form'),
	createPromisesBtn: document.querySelector('.form > button'),
};

refs.createPromisesBtn.addEventListener('click', onCreatePromisesBtnClick);

function onCreatePromisesBtnClick(evt) {
	evt.preventDefault();

	let firstDelay = refs.form.elements.delay.valueAsNumber;
	const delayStep = refs.form.elements.step.valueAsNumber;
	const amount = refs.form.elements.amount.valueAsNumber;
	let position = 0;

	setTimeout(() => {
		const intervalId = setInterval(() => {
			position += 1;
			if (position === amount) {
					clearInterval(intervalId);
				};
				createPromise(position, firstDelay)
					.then(({ position, delay }) => {
						Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`,
							{
   				 			timeout: 5000,
  						},);
					})
					.catch(({ position, delay }) => {
						Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`,
							{
    						timeout: 5000,
  						},);
					});
							firstDelay += delayStep;
		}, delayStep);
	}, firstDelay);
};


function createPromise(position, delay) {
	const shouldResolve = Math.random() > 0.3;
	return new Promise((resolve, reject) => {
		if (shouldResolve) {
			resolve({ position, delay });
  } else {
			reject({ position, delay });
  }
	})
};

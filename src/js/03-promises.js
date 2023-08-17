import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
	form: document.querySelector('.form'),
	createPromisesBtn: document.querySelector('.form > button'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
	evt.preventDefault();
	
	let delay = refs.form.elements.delay.valueAsNumber;
	const delayStep = refs.form.elements.step.valueAsNumber;
	const amount = refs.form.elements.amount.valueAsNumber;
	refs.createPromisesBtn.disabled = true;
	setTimeout(() => {
		refs.createPromisesBtn.disabled = false;
	}, delay + delayStep*amount)
	
	for (let position = 1; position <= amount; position += 1) {
		createPromise(position, delay)
			.then(({ position, delay }) => {
				Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
			})
			.catch(({ position, delay }) => {
				Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
			});
		delay += delayStep;
	}
};


function createPromise(position, delay) {
	const shouldResolve = Math.random() > 0.3;
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (shouldResolve) {
				resolve({ position, delay });
			} else {
				reject({ position, delay });
			};
		}, delay)
	});
};

const formBtns = document.querySelectorAll('.formBtn');
const numbers = document.querySelectorAll('.numbers');
const progressBar = document.querySelector('.progBar');
let progressValue = {
	lastActiveNumber: 1,
	maxValue: 5,
};

function modifyValue(value) {
	if (progressValue.lastActiveNumber + value < 1) {
		return 1;
	}
	if (progressValue.lastActiveNumber + value > 4) {
		return maxValue - 1;
	}

	if (progressValue.lastActiveNumber + value === 1) {
		formBtns[0].disabled = true;
	} else if (progressValue.lastActiveNumber + value === 4) {
		formBtns[1].disabled = true;
	} else {
		formBtns[0].disabled = false;
		formBtns[1].disabled = false;
	}
	progressValue.lastActiveNumber = progressValue.lastActiveNumber + value;

	updateAppearance(progressValue.lastActiveNumber);
	console.log(progressValue.lastActiveNumber);
	return progressValue.lastActiveNumber;
}

function updateAppearance(circle) {
	circle--;
	for (i = circle; i < progressValue.maxValue; i++) {
		numbers[i].classList.remove('numberActive');
		numbers[circle].classList.add('numberActive');
		progressBar.style.width = `${circle * 33}%`;
	}
}

formBtns[0].addEventListener('click', () => {
	modifyValue(-1);
});

formBtns[1].addEventListener('click', () => {
	modifyValue(1);
});

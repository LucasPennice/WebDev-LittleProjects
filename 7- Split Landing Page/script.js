const firstSide = {
	h1: document.querySelector('#firstPictureH1'),
	btn: document.querySelector('#firstBtn'),
	container: document.querySelector('#firstPicture'),
};

const picturesContainer = document.querySelector('.picturesContainer');

const secondSide = {
	h1: document.querySelector('#secondPictureH1'),
	btn: document.querySelector('#secondBtn'),
	container: document.querySelector('#secondPicture'),
};

firstSide.container.addEventListener('mouseover', () => {
	firstSide.container.style.flex = `80% 1 1`;
	secondSide.container.style.flex = `20% 1 1`;
	secondSide.btn.style.opacity = 0;
	secondSide.h1.style.opacity = 0;
	firstSide.btn.style.opacity = 1;
	firstSide.h1.style.opacity = 1;
	firstSide.container.style.filter = `grayscale(0)`;
	secondSide.container.style.filter = `grayscale(1)`;
});

secondSide.container.addEventListener('mouseover', () => {
	secondSide.container.style.flex = `80% 1 1`;
	firstSide.container.style.flex = `20% 1 1`;
	firstSide.btn.style.opacity = 0;
	firstSide.h1.style.opacity = 0;
	secondSide.btn.style.opacity = 1;
	secondSide.h1.style.opacity = 1;
	firstSide.container.style.filter = `grayscale(1)`;
	secondSide.container.style.filter = `grayscale(0)`;
});

firstSide.container.addEventListener('mouseout', resetWidths);
secondSide.container.addEventListener('mouseout', resetWidths);

function resetWidths() {
	firstSide.btn.style.opacity = 1;
	firstSide.h1.style.opacity = 1;
	secondSide.btn.style.opacity = 1;
	secondSide.h1.style.opacity = 1;
	secondSide.container.style.flex = `50% 1 1`;
	firstSide.container.style.flex = `50% 1 1`;
	firstSide.container.style.filter = `grayscale(.6)`;
	secondSide.container.style.filter = `grayscale(0.6)`;
}

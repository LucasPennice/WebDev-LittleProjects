const circleMenu = document.querySelector('.circleMenu');
const burguerBtn = document.querySelector('#burguer');
const closeBtn = document.querySelector('#close');
const main = document.querySelector('main');
const linksMenu = document.querySelector('.linksMenu');
let alturaViewPort = window.innerHeight;

linksMenu.style.top = `${alturaViewPort * 0.8}px`;

function toggleMenu() {
	burguerBtn.classList.toggle('menuInactive');
	closeBtn.classList.toggle('menuInactive');
	main.classList.toggle('rotateContent');
	linksMenu.classList.toggle('linksMenuActive');
	linksMenu.style.top = `${alturaViewPort * 0.8}px`;
}

circleMenu.addEventListener('click', toggleMenu);

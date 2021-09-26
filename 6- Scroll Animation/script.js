const containersList = document.querySelectorAll('.dooDooContainer');

window.addEventListener('scroll', heightCheck);
heightCheck();
function heightCheck() {
	let triggerWhen = (window.innerHeight / 5) * 3.5;

	for (let container of containersList) {
		let containerTop = container.getBoundingClientRect().top;
		if (containerTop < triggerWhen) {
			container.classList.remove('dooDooAway');
		}
	}
	for (let container of containersList) {
		let containerTop = container.getBoundingClientRect().top;
		if (containerTop > triggerWhen) {
			container.classList.add('dooDooAway');
		}
	}
}

const loading = document.querySelector('.loading');
const mainContent = document.querySelector('.mainContent');
let loadingProgress = 0;
let blurring = 99;
let blur = setInterval(() => {
	loadingProgress++;
	loading.innerHTML = `${loadingProgress}%`;
	if (loadingProgress > 99) {
		clearInterval(blur);
	}
	if (loadingProgress === 100) {
		loading.style.opacity = '0';
	}
	mainContent.style.filter = `blur(${blurring--}px)`;
}, 10);

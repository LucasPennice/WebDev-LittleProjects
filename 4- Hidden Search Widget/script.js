const searchBar = document.querySelector('.searchBar');
const searchButton = document.querySelector('.searchButton');

function searchBarLookUpdate() {
	searchButton.classList.toggle('searchButtonActive');
	searchBar.classList.toggle('searchBarActive');
}

searchButton.addEventListener('click', () => {
	searchBarLookUpdate();
});

searchBar.addEventListener('focusout', () => {
	searchBarLookUpdate();
});

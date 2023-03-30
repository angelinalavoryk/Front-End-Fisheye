
const filterSelect = document.querySelector('.filter-select__trigger');


filterSelect.addEventListener('click', () => {
    filterSelect.parentNode.classList.toggle('open');
});
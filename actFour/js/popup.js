const buttonEl = document.querySelector('.button');
const blockEl = document.querySelector('.visible');
buttonEl.addEventListener('click', function (e) {
    blockEl.classList.toggle('visible');
});

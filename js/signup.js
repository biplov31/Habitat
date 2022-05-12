const signUpBtn = document.querySelector('.signup-btn');
const happyGif = document.querySelector('.happy-gif')
signUpBtn.addEventListener('click', addMedia);
function addMedia() {
  happyGif.style.display = 'block';
  setTimeout(() => {happyGif.setAttribute('style', 'display: none; transition: 250ms ease')}, 5000);
}
document.addEventListener('keydown', (event) => {
  const key = event.key.toUpperCase();
  const keyElement = document.querySelector(`.key[data-key="${key}"]`);
  if (keyElement) {
    keyElement.classList.add('active');
  }
});

document.addEventListener('keyup', (event) => {
  const key = event.key.toUpperCase();
  const keyElement = document.querySelector(`.key[data-key="${key}"]`);
  if (keyElement) {
    keyElement.classList.remove('active');
  }
});

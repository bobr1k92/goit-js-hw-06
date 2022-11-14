const rangeInput = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

rangeInput.addEventListener('change', e => {
  span.style.fontSize = `${e.target.value}px`;
});
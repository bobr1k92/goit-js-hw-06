function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorButton = document.querySelector('.change-color');
const colorName = document.querySelector('.color');
const background = document.querySelector('body');

const changeBgColor = () => {
  colorButton.addEventListener('click', () => {
     background.style.backgroundColor = getRandomHexColor();
     colorName.innerHTML = background.style.backgroundColor;
  });
};
changeBgColor();
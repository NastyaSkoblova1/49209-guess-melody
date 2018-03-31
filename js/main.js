const template = document.querySelector(`#templates`);
const mainDisplay = document.querySelector(`section.main`);
const displays = template.content.querySelectorAll(`.main`);
let numberOfDisplay = 0;

const showDisplay = (number) => {
  mainDisplay.innerHTML = ``;
  mainDisplay.appendChild(displays[number]);
};

document.onkeydown = function (e) {
  if (e.altKey && e.keyCode === 39) {
    if (numberOfDisplay < displays.length - 1) {
      numberOfDisplay++;
      showDisplay(numberOfDisplay);
    }
    e.preventDefault();
  }
  if (e.altKey && e.keyCode === 37) {
    if (numberOfDisplay > 0) {
      numberOfDisplay--;
      showDisplay(numberOfDisplay);
    }
    e.preventDefault();
  }
};

showDisplay(0);

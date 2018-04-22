import {createElement, changeView} from './util.js';
import welcomeElement from './module-welcome.js';

const resultTimeElementTemplate = `
  <section class="main main--result"><section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
  <h2 class="title">Увы и ах!</h2>
  <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
  <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span></section>`;

const resultTimeElement = createElement(resultTimeElementTemplate);
const buttonRestart = resultTimeElement.querySelector(`.main-replay`);
const changeScreenOnWelcome = () => {
  changeView(welcomeElement);
};

buttonRestart.addEventListener(`click`, changeScreenOnWelcome);

export default resultTimeElement;

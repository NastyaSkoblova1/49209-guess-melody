import {createElement, changeView} from './util.js';
import renderLogo from './logo.js';
import welcomeElement from './module-welcome.js';

const resultEffortsElementTemplate = `
  <section class="main main--result">
  ${renderLogo()};
  <h2 class="title">Какая жалость!</h2>
  <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
  <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span></section>`;

const resultEffortsElement = createElement(resultEffortsElementTemplate);
const buttonRestart = resultEffortsElement.querySelector(`.main-replay`);
const changeScreenOnWelcome = () => {
  changeView(welcomeElement);
};

buttonRestart.addEventListener(`click`, changeScreenOnWelcome);

export default resultEffortsElement;

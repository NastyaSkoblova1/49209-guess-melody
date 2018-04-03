import {createElement, changeView} from './util.js';
import levelArtistElement from './module-level-artist.js';

const welcomeElementTemplate = `
  <section class="main main--welcome"><section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
      Ошибиться можно 3 раза.<br>
      Удачи!
    </p></section>`;

const welcomeElement = createElement(welcomeElementTemplate);
const buttonPlay = welcomeElement.querySelector(`button.main-play`);

buttonPlay.onclick = function () {
  changeView(levelArtistElement);
};

export default welcomeElement;

import {createElement, renderScreen} from '../util.js';
import {initialState} from '../data.js';
import renderLogo from './logo.js';
import levelArtistElement from './artist.js';

const welcomeElementTemplate = `
  <section class="main main--welcome">
  	${renderLogo()}
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
      Ошибиться можно 3 раза.<br>
      Удачи!
    </p></section>`;

const welcomeElement = createElement(welcomeElementTemplate);
const buttonPlay = welcomeElement.querySelector(`button.main-play`);
const changeScreenOnLevelArtist = () => {
  renderScreen(levelArtistElement(initialState));
};

buttonPlay.addEventListener(`click`, changeScreenOnLevelArtist);

export default welcomeElement;

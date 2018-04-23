import {createElement} from './util.js';
import renderLogo from './logo.js';

const resultTimeElement = () => createElement(`
  <section class="main main--result">
  ${renderLogo()}
  <h2 class="title">Увы и ах!</h2>
  <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
  <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span></section>`);

export default resultTimeElement;

import {createElement} from '../util.js';
import renderLogo from './logo.js';

const resultEffortsElement = () => createElement(`
  <section class="main main--result">
  ${renderLogo()}
  <h2 class="title">Какая жалость!</h2>
  <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
  <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span></section>`);

export default resultEffortsElement;

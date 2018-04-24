import {createElement} from './util.js';
import renderLogo from './logo.js';

const resultElement = (data) => createElement(`
  <section class="main main--result">
    ${renderLogo()}
    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
      <br>вы&nbsp;набрали ${data.score} баллов (8 быстрых)
      <br>совершив ${data.notes} ошибки</div>
    <span class="main-comparison">Вы заняли 2 место из 10. Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span></section>`);

export default resultElement;

import {createElement} from './util.js';
import renderLogo from './logo.js';

const resultElement = (data, result) => createElement(`
  <section class="main main--result">
    ${renderLogo()}
    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
      <br>вы&nbsp;набрали ${data.score} баллов (${data.fastAnswer} быстрых)
      <br>совершив ${data.notes} ошибки</div>
    <span class="main-comparison">Вы заняли ${result.place} место из ${result.players}. Это&nbsp;лучше чем у&nbsp;${result.percent}%&nbsp;игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span></section>`);

export default resultElement;

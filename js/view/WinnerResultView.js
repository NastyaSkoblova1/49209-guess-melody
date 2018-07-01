import AbstractView from './AbstractView.js';
import Application from '../Application.js';
import scoring from '../data/score.js';
import playerResult from '../data/playerResult.js';
import {gameRules} from '../data/gameData.js';
import {getMinute, SEC_PER_MIN} from './HeaderView.js';

export default class WinnerResultView extends AbstractView {
  constructor(state) {
    super();
    this.result = state;
    this.mistakes = state.mistakes;
    this.statistics = state.statistics;
    this.time = gameRules.MAX_TIME - state.time;
    this.quickAnswers = this.result.filter((item) => item.time < gameRules.QUICK_TIME);
  }

  get template() {
    return `
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      <h2 class="title">Вы настоящий меломан!</h2>
      <div class="main-stat">За&nbsp;
      ${getMinute(this.time)}&nbsp;минуты и 
      ${this.time - getMinute(this.time) * SEC_PER_MIN}&nbsp;секунд
        <br>вы&nbsp;набрали ${scoring(this.result)} баллов (${this.quickAnswers.length} быстрых)
        <br>совершив ${this.mistakes} ошибки</div>
      <span class="main-comparison">${playerResult(this.result, this.statistics)}</span>
      <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>`;
  }

  bind() {
    const restartBtn = this.element.querySelector(`.main-replay`);
    restartBtn.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      Application.showWelcome();
    });
  }

  onRestart() {}
}

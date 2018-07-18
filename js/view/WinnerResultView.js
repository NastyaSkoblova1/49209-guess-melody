import AbstractView from './AbstractView.js';
import Application from '../Application.js';
import scoring from '../data/score.js';
import playerResult from '../data/playerResult.js';
import {GAME_RULES} from '../data/gameData.js';
import {getMinute} from './HeaderView.js';

const COUNT_POINT = 2;
const FAIL_ANSWER = -1;
const NUM_ENDING = {
  multipleHundred: 100,
  multipleTen: 10,
  greaterThanEleven: 11,
  lessThanNineteen: 19
};

const getNumEnding = (iNumber, aEndings) => {
  let sEnding;
  let i;
  iNumber = iNumber % NUM_ENDING.multipleHundred;
  if (iNumber >= NUM_ENDING.greaterThanEleven && iNumber <= NUM_ENDING.lessThanNineteen) {
    sEnding = aEndings[2];
  } else {
    i = iNumber % NUM_ENDING.multipleTen;
    switch (i) {
      case (1):
        sEnding = aEndings[0];
        break;
      case (2):
      case (3):
      case (4):
        sEnding = aEndings[1];
        break;
      default:
        sEnding = aEndings[2];
    }
  }
  return sEnding;
};

export default class WinnerResultView extends AbstractView {
  constructor(state, stats) {
    super();
    this.result = state.answer;
    this.mistakes = state.mistakes;
    this.statistics = state.statistics;
    this.time = stats;
    this.score = scoring(this.result.answer);
    this.minutes = getMinute(this.time);
    this.seconds = this.time - this.minutes * GAME_RULES.secPerMin;
    this.quickAnswers = this.result.filter((item) => item.time < GAME_RULES.quickTime && item !== FAIL_ANSWER);
    this.quick = this.quickAnswers.length * COUNT_POINT - this.mistakes * COUNT_POINT;
  }

  get template() {
    return `
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      <h2 class="title">Вы настоящий меломан!</h2>
      <div class="main-stat">За&nbsp;
      ${this.time}&nbsp;${getNumEnding(this.minutes, GAME_RULES.minutes)} и 
      ${this.seconds}&nbsp;${getNumEnding(this.seconds, GAME_RULES.seconds)}
        <br>вы&nbsp;набрали ${this.score} ${getNumEnding(this.score, GAME_RULES.points)} (${this.quick} ${getNumEnding(this.quick, GAME_RULES.quick)})
        <br>совершив ${this.mistakes} ${getNumEnding(this.mistakes, GAME_RULES.mistakes)}</div>
      <span class="main-comparison">${playerResult(this.result, this.statistics)}</span>
      <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>`;
  }

  bind() {
    const restartBtn = this.element.querySelector(`.main-replay`);
    restartBtn.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      Application.showGame();
    });
  }

  onRestart() {}
}

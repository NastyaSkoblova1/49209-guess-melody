import AbstractView from './AbstractView.js';
import {gameRules} from '../data/gameData.js';

export const SEC_PER_MIN = 60;

export const getMinute = function (time) {
  return Math.trunc(time / SEC_PER_MIN);
};

const RADIUS = 370;

const drawLives = (state) => {
  return `
    ${new Array(state).fill(`
      <img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`).join(``)}`;
};

export default class HeaderView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.lengthRound = Math.round(2 * Math.PI * RADIUS);
    this.shadowRound = this.lengthRound / (gameRules.MAX_TIME);
    this.timerView = this.shadowRound * (gameRules.MAX_TIME - this.state.time);
  }

  get template() {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780" stroke-dasharray="${this.lengthRound}" 
        stroke-dashoffset="${this.timerView}">
        <circle
          cx="390" cy="390" r="370"
          class="timer-line"
          style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center">
        </circle>
        <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
          <span class="timer-value-mins">${getMinute(this.state.time)}</span>
          <span class="timer-value-dots">:</span>
          <span class="timer-value-secs">${this.state.time - getMinute(this.state.time) * SEC_PER_MIN}</span>
        </div>
      </svg>
      <div class="main-mistakes">${drawLives(this.state.mistakes)}</div>`;
  }
}

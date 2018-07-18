import HeaderView from './view/HeaderView.js';
import ArtistView from './view/ArtistView.js';
import GenreView from './view/GenreView.js';
import LooseResultView from './view/LooseResultView.js';
import TimeResultView from './view/TimeResultView.js';
import {GAME_RULES} from './data/gameData.js';
import Application from './Application.js';

const LEVEL_FAIL = -1;
const END_GAME = 0;
const TIMER_INTERVAL = 1000;

const getCurrentView = (state) => {
  return state.getType() === `artist` ? new ArtistView(state.getCurrentLevel()) : new GenreView(state.getCurrentLevel());
};

class GameScreen {
  constructor(model) {
    this.model = model;
    this.header = new HeaderView(this.model.state);
    this.content = getCurrentView(this.model);

    this.root = document.createElement(`div`);
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.content.element);

    this._interval = null;
  }

  get element() {
    return this.root;
  }

  stopGame() {
    clearInterval(this._interval);
    this.model.state.endLevelTime = this.model._state.time;
  }

  startGame() {
    this.changeLevel();
    this.model.state.startLevelTime = this.model.state.time;

    this._interval = setInterval(() => {
      this.model.tick();
      this.header.renderMinutes(this.model.state.time);
      this.header.renderSeconds(this.model.state.time);
      this.header.renderRound(this.model.time);

      if (this.model.state.time === GAME_RULES.quickTime) {
        this.header.setColorTime();
      }

      if (this.model.state.time <= END_GAME) {
        this.stopGame();
        this.endGame(`timeout`);
      }
    }, TIMER_INTERVAL);
  }

  answer(answer) {
    this.stopGame();
    this.model.nextLevel();

    switch (answer) {
      case true:
        this.model.state.answer.answers.push({answer, time: this.model.getLevelTime()});
        if (this.checkLevel()) {
          this.showStats();
        } else {
          this.startGame();
        }
        break;
      case false:
        this.model.state.answer.answers.push(LEVEL_FAIL);
        this.model.loose();
        this.updateHeader();
        if (this.model.state.lives <= END_GAME) {
          this.endGame(`loose`);
        } else if (this.checkLevel()) {
          this.showStats();
        } else {
          this.startGame();
        }
        break;
    }
  }

  updateHeader() {
    const header = new HeaderView(this.model.state);
    this.root.replaceChild(header.element, this.header.element);
    this.header = header;
  }

  changeLevel() {
    this.updateHeader();
    const level = getCurrentView(this.model);
    level.onAnswer = this.answer.bind(this);
    this.changeContentView(level);
  }

  checkLevel() {
    return this.model.state.level >= GAME_RULES.levelsAmount;
  }

  showStats() {
    this.model.state.answer.time = GAME_RULES.maxTime - this.model._state.time;
    Application.showStats(this.model._state);
  }

  endGame(result) {
    let resultScreen = ``;

    if (result === `loose`) {
      resultScreen = new LooseResultView();
      Application.showEnd(resultScreen);
    }

    if (result === `timeout`) {
      resultScreen = new TimeResultView();
      Application.showEnd(resultScreen);
    }

    this.model.restart();
  }

  changeContentView(view) {
    this.root.replaceChild(view.element, this.content.element);
    this.content = view;
  }
}

export default GameScreen;

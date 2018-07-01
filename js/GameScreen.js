import HeaderView from './view/HeaderView.js';
import ArtistView from './view/ArtistView.js';
import GenreView from './view/GenreView.js';
import WinnerResultView from './view/WinnerResultView.js';
import LooseResultView from './view/LooseResultView.js';
import TimeResultView from './view/TimeResultView.js';
import {gameRules} from './data/gameData.js';
import Application from './Application.js';

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
    this.model.stopLevelTime = this.model.state.time;
  }

  startGame() {
    this.changeLevel();
    this.model.startLevelTime = this.model.state.time;

    this._interval = setInterval(() => {
      this.model.tick();
      this.updateHeader();
    }, 1000);
  }

  answer(answer) {
    this.stopGame();

    switch (answer) {
      case true:
        this.model.state.answers.push({answer, time: this.model.getLevelTime()});
        this.model.nextLevel();
        if (this.model.state.level >= gameRules.MAX_LEVEL) {
          this.endGame(`win`);
        } else {
          this.startGame();
        }
        break;
      case false:
        this.model.state.answers.push({answer, time: this.roundTime});
        this.model.loose();
        this.model.nextLevel();
        if (this.model.state.lives <= 0) {
          this.endGame(`loose`);
        } else {
          this.startGame();
        }
        break;
    }
  }

  restart(continueGame) {
    if (!continueGame) {
      this.model.restart();
    }

    this.startGame();
  }

  updateHeader() {
    const header = new HeaderView(this.model.state);
    this.root.replaceChild(header.element, this.header.element);
    this.header = header;
    if (this.model.state.time <= 0) {
      this.stopGame();
      this.endGame(`timeout`);
    }
  }

  changeLevel() {
    this.updateHeader();
    const level = getCurrentView(this.model);
    level.onAnswer = this.answer.bind(this);
    this.changeContentView(level);
  }

  endGame(result) {
    let resultScreen = ``;

    if (result === `win`) {
      resultScreen = new WinnerResultView(this.model.state);
    }

    if (result === `loose`) {
      resultScreen = new LooseResultView();
    }

    if (result === `timeout`) {
      resultScreen = new TimeResultView();
    }

    Application.showStats(resultScreen);
  }

  changeContentView(view) {
    this.root.replaceChild(view.element, this.content.element);
    this.content = view;
  }
}

export default GameScreen;

import {INITIAL_STATE} from './data/data.js';
import HeaderView from './view/header-view.js';
import ArtistView from './view/artist-view.js';
import GenreView from './view/genre-view.js';
import ResultView from './view/result-view.js';
import ResultEffortsView from './view/result-efforts-view.js';
import ResultTimeView from './view/result-time-view.js';

const getCurrentView = (state) => {
  return state.getType() === `artist` ? new ArtistView(state.getCurrentLevel()) : new GenreView(state.getCurrentLevel());
}

class GameScreen {
  constructor(model) {
    this.model = model;
    this.header = new HeaderView(this.model.state);
    this.level = getCurrentView(this.model);
    this.root = document.createElement(`section`);
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.level.element);
    this._interval = null;
  }

  get element() {
    return this.root;
  }

  startGame() {
    this.changeLevel();
    this.model.levelStartTime = this.model.state.time;

    this._interval = setInterval(() => {
      this.model.tick();
      this.updateHeader();
    }, 1000);
  }

  stopGame() {
    clearInterval(this._interval);
    this.model.levelStopTime = this.model.state.time;
  }

  endGame(result) {
    let resultScreen = ``;

    switch(result) {
      case `winner`:
        resultScreen = new ResultView(this.model.state);
        break;

      case `efforts`:
        resultScreen = new ResultEffortsView();
        break;

      case `timeout`:imeout
        resultScreen = new ResultTimeView();
        break;
    }

    Application.showResultScreen(resultScreen);
  }

  answer(answer) {
    this.stopGame();

    switch (answer) {
      case true:
        this.model.state.answers.push({answer, time: this.model.getLevelTime()});
        this.model.nextScreen();
        if (this.model.state.level >= gameRules.MAX_LEVEL) {
          this.endGame(`winner`);
        } else {
          this.startGame();
        }
        break;
      case false:
        this.model.state.answers.push({answer, time: this.levelTime});
        this.model.loose();
        this.model.nextScreen();
        if (this.model.state.lives <= 0) {
          this.endGame(`efforts`);
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
  }

  changeLevel() {
    this.updateHeader();
    const level = getCurrentView(this.model);
    level.onAnswer = this.answer.bind(this);
    this.root.replaceChild(level.element, this.level.element);
    this.level = level;
  }
}

export default GameScreen;

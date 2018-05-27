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

  init() {
    this.state = Object.assign({}, INITIAL_STATE);
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
  }

  changeLevelView(view) {
    this.root.replaceChild(view.element, this.level.element);
    this.level = view;
  }
}

export default GameScreen;

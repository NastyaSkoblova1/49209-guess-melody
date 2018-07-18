import {INITIAL_STATE} from './data/gameData.js';

class GameModel {
  constructor(data) {
    this.data = data;
    this.restart();
  }

  get state() {
    return this._state;
  }

  getLevel() {
    return this.data[this._state.level];
  }

  nextLevel() {
    this._state.level += 1;
  }

  loose() {
    this._state.mistakes += 1;
    this._state.level -= 1;
  }

  getLevelTime() {
    return this._state.startLevelTime - this._state.endLevelTime;
  }

  getCurrentLevel() {
    return this.getLevel(this._state);
  }

  getType() {
    return this.data[this._state.level].type;
  }

  restart() {
    this._state = Object.assign({}, INITIAL_STATE);
    this._state.answer.answers = [];
  }

  tick() {
    this._state.time -= 1;
  }
}

export default GameModel;

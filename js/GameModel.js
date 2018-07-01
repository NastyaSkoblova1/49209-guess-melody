import {INITIAL_STATE} from './data/gameData.js';
import LEVELS from './data/levels.js';

const getLevel = (state) => LEVELS[state.level];

class GameModel {
  constructor() {
    this.restart();
  }

  get state() {
    return this._state;
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
    return getLevel(this._state);
  }

  getType() {
    return LEVELS[this._state.level].type;
  }

  restart() {
    this._state = INITIAL_STATE;
  }

  tick() {
    this._state.time -= 1;
  }
}

export default GameModel;

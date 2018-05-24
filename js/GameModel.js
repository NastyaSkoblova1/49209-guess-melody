import {INITIAL_STATE} from './data/data.js';

class GameModel {
  constructor(playerName) {
    this.playerName = playerName;
    this.restart();
  }

  get state() {
  	return this._state;
  }

  hasNextScreen() {
  	return getScreen(this._state.level + 1) !== void 0;
  }

  nextScreen() {
  	this._state = changeScreen(this._state, this._state.level + 1);
  }

  loose() {
    this._state = loose(this._state);
  }

  restart() {
    this._state = INITIAL_STATE;
  }

  isLoose() {
    return this._state.lives <= 0;
  }

  getCurrentLevel() {
    return getLevel(this._state);
  }

  tick() {
    this._state = tick(this._state);
  }
}

export default GameModel;
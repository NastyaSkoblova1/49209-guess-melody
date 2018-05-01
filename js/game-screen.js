import {initialState, levels} from './data.js';
import {calculateResult, showResult} from './gameplay.js';
import ArtistView from './artist-view.js';

let gameState = Object.assign({}, initialState);
const artist = new ArtistView(levels[gameState.level]);

const gameContainerElement = artist.render();

artist.onAnswerClick = (answer) => {
  showResult(answer);
  calculateResult();
};

export default gameContainerElement;

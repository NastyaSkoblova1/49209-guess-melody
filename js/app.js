import {initialState, otherInitialState, levels, scoreConst} from './data.js';
import {renderScreen} from './util.js';
import ArtistView from './view/artist-view.js';
import GenreView from './view/genre-view.js';
import ResultView from './view/result-view.js';
import ResultTimeView from './view/result-time-view.js';
import ResultEffortsView from './view/result-efforts-view.js';

let gameState = Object.assign({}, initialState);

const compareResult = () => {
  const scores = otherInitialState.map((it) => it.score);
  scores.push(gameState.score);

  scores.sort((a, b) => {
    return b - a;
  });

  const amountOfPlayers = scores.length;
  const ourPlace = scores.indexOf(initialState.score) + 1;
  const ourPercent = (amountOfPlayers - ourPlace) / amountOfPlayers * 100;

  const resultState = {
    players: amountOfPlayers,
    place: ourPlace,
    percent: ourPercent
  };

  return resultState;
};

const restartGame = () => {
  const restartBtn = document.querySelector(`.main-replay`);
  restartBtn.addEventListener(`click`, () => {
    gameState.level = 1;
    gameState.score = 0;
    gameState.notes = 0;
    gameState.time = 300;
    renderScreen(artist);
  });
};

const artist = new ArtistView(levels[gameState.level]);
const genre = new GenreView(levels[gameState.level]);
const result = new ResultView(gameState, compareResult());
const resultTime = new ResultTimeView();
const resultEfforts = new ResultEffortsView();

const changeLevel = (levelType) => {
  if (gameState.level >= 10) {
    renderScreen(result);
    restartGame();
    return;
  }

  if (gameState.time === 0) {
    renderScreen(resultTime);
    restartGame();
    return;
  }

  if (gameState.notes === 3) {
    renderScreen(resultEfforts);
    restartGame();
    return;
  }

  let gameLevel;

  switch (levelType) {
    case `artist`:
      gameLevel = artist;
      break;
    case `genre`:
      gameLevel = genre;
      break;
  }

  renderScreen(gameLevel);
};

const calculateResult = (answer) => {
  if (+answer.getAttribute(`data-id`) === levels[gameState.level].rightAnswer) {
    gameState.score += scoreConst.SLOW_AND_CORRECT;
  } else {
    gameState.notes += 1;
  }
};

const showResult = () => {
  if (gameState.notes < 3) {
    gameState.level++;
    changeLevel(levels[gameState.level].type);
  } else {
    changeLevel();
  }
};

const gameContainerElement = artist;

artist.onAnswerClick = (answer) => {
  showResult();
  calculateResult(answer);
};

genre.onFormChange = () => {};

genre.onFormSubmit = () => {};

export default gameContainerElement;

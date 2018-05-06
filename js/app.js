import {otherInitialState, initialState, levels, scoreConst} from './data.js';
import {renderScreen, createElement, updateScreen} from './util.js';
import ArtistView from './view/artist-view.js';
import GenreView from './view/genre-view.js';
import ResultView from './view/result-view.js';
import ResultEffortsView from './view/result-efforts-view.js';

let gameState = Object.assign({}, initialState);

const calculateResult = (answer) => {
  if (+answer.getAttribute(`data-id`) === levels[gameState.level].rightAnswer) {
    gameState.score += scoreConst.SLOW_AND_CORRECT;
  } else {
    gameState.notes += 1;
  }
};

const compareResult = () => {
  const scores = otherInitialState.map((it) => it.score);
  scores.push(gameState.score);

  scores.sort((a, b) => {
    return b - a;
  });

  const amountOfPlayers = scores.length;
  const ourPlace = scores.indexOf(gameState.score) + 1;
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
    const artist = new ArtistView(levels[gameState.level]);
    renderScreen(artist.element);
    artist.onAnswer = onUserAnswer;
  });
};

const gameContainerElement = createElement();
const levelContainerElement = createElement();

gameContainerElement.appendChild(levelContainerElement);

const onUserAnswer = (answer) => {
  calculateResult(answer);
  gameState.level++;

  if (gameState.level > scoreConst.LEVELS_AMOUNT) {
    renderScreen(new ResultView(gameState, compareResult()).element);
    restartGame();
  } else if (gameState.notes > 2) {
    renderScreen(new ResultEffortsView().element);
    restartGame();
  } else {
    updateGame(gameState);
  }
};

const updateGame = (state) => {
  const level = levels[state.level].type === `artist` ? new ArtistView(levels[state.level]) : new GenreView(levels[state.level]);
  level.onAnswer = onUserAnswer;
  updateScreen(levelContainerElement, level);
};

updateGame(gameState);

export default gameContainerElement;

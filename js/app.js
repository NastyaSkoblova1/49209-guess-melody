import {otherInitialState, initialState, levels, scoreConst} from './data/data.js';
import {renderScreen, createElement, updateScreen} from './util.js';
import HeaderView from './view/header-view.js';
import ArtistView from './view/artist-view.js';
import GenreView from './view/genre-view.js';
import ResultView from './view/result-view.js';
import ResultEffortsView from './view/result-efforts-view.js';

let gameState = Object.assign({}, initialState);

const gameContainer = createElement();
const headerContainer = createElement();
const levelContainer = createElement();

gameContainer.appendChild(headerContainer);
gameContainer.appendChild(levelContainer);


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

const onUserRestart = () => {
  gameState = Object.assign({}, initialState);
  renderScreen(gameContainer);
  updateGame(gameState);
};

const onUserAnswer = (answer) => {
  let result;
  calculateResult(answer);
  gameState.level++;

  if (gameState.level > scoreConst.LEVELS_AMOUNT) {
    result = new ResultView(gameState, compareResult());
    renderScreen(result.element);
    result.onRestart = onUserRestart;
  } else if (gameState.notes > 2) {
    result = new ResultEffortsView();
    renderScreen(result.element);
    result.onRestart = onUserRestart;
  } else {
    updateGame(gameState);
  }
};

const updateGame = (state) => {
  updateScreen(headerContainer, new HeaderView(state));
  const nextLevel = levels[state.level];
  const level = nextLevel.type === `artist` ? new ArtistView(nextLevel) : new GenreView(nextLevel);
  level.onAnswer = onUserAnswer;
  updateScreen(levelContainer, level);
};

export const startGame = () => {
  updateGame(gameState);
};

export default gameContainer;

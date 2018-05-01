import {renderScreen} from './util.js';
import levelArtistElement from './artist.js';
import levelGenreElement from './genre.js';
import resultElement from './result.js';
import resultEffortsElement from './result-efforts.js';
import resultTimeElement from './result-time.js';
import {otherInitialState, initialState, levels, scoreConst} from './data.js';


const compareResult = () => {
  const scores = otherInitialState.map((it) => it.score);
  scores.push(initialState.score);

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
    initialState.level = 1;
    initialState.score = 0;
    initialState.notes = 0;
    initialState.time = 300;
    renderScreen(levelArtistElement(initialState));
  });
};

export const changeLevel = (levelType) => {
  if (initialState.level >= 10) {
    renderScreen(resultElement(initialState, compareResult()));
    restartGame();
    return;
  }

  if (initialState.time === 0) {
    renderScreen(resultTimeElement(initialState));
    restartGame();
    return;
  }

  if (initialState.notes === 3) {
    renderScreen(resultEffortsElement(initialState));
    restartGame();
    return;
  }

  switch (levelType) {
    case `artist`:
      renderScreen(levelArtistElement(initialState));
      break;
    case `genre`:
      renderScreen(levelGenreElement(initialState));
      break;
  }
};

export const calculateResult = (answer) => {
  if (+answer.getAttribute(`data-id`) === levels[initialState.level].rightAnswer) {
    initialState.score += scoreConst.SLOW_AND_CORRECT;
  } else {
    initialState.notes += 1;
  }
};

export const showResult = () => {
  if (initialState.notes < 3) {
    initialState.level++;
    changeLevel(levels[initialState.level].type);
  } else {
    changeLevel();
  }
};
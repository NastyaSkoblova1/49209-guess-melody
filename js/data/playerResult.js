import scoring from './score.js';
import {GAME_RULES} from './gameData.js';

const sortArray = (a, b) => {
  return b - a;
};

export const ResultMessage = {
  TIME_FAIL: `Время вышло! Вы не успели отгадать все мелодии`,
  LOOSE_FAIL: `У вас закончились все попытки. Ничего, повезёт в следующий раз!`
};

export const getWinnerMessage = (position, statistics, percent) => {
  return `Вы заняли ${position} место из ${statistics} игроков. Это лучше, чем у ${percent}% игроков`;
};

export default (answer, statistics) => {
  let failAnswers = answer.answers.filter((item) => item === -1).length;
  const gameStats = statistics.map((item) => scoring(item.answers));
  const score = scoring(answer.answers);

  if (answer.time > GAME_RULES.maxTime) {
    return ResultMessage.TIME_FAIL;
  }

  if (failAnswers > GAME_RULES.failAmount) {
    return ResultMessage.LOOSE_FAIL;
  }

  gameStats.push(score);
  gameStats.sort(sortArray);
  let playerPosition = gameStats.indexOf(score) + 1;
  let successPercent = Math.floor((gameStats.length - playerPosition) / gameStats.length * 100);

  return getWinnerMessage(playerPosition, gameStats.length, successPercent);
};

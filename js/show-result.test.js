import {assert} from 'chai';
import {showResult} from './show-result.js';

const createResultObject = (resultScore, resultNotes, resultTime) => ({
  score: resultScore,
  notes: resultNotes,
  time: resultTime
});

const generateResult = (createResult, resultScore, resultNotes, resultTime) => {
  const result = createResult(resultScore, resultNotes, resultTime);
  return result;
};

const resultsOtherPlayers = [
  {
    score: 18,
    notes: 2,
    time: 5
  },
  {
    score: 5,
    notes: 2,
    time: 0
  },
  {
    score: 12,
    notes: 1,
    time: 15
  },
  {
    score: -5,
    notes: 1,
    time: 10
  }
];

describe(`Show result`, () => {
  it(`should return \`Время вышло! Вы не успели отгадать все мелодии\``, () => {
    assert.equal(showResult(resultsOtherPlayers, generateResult(createResultObject, 15, 3, 0)), `Время вышло! Вы не успели отгадать все мелодии`);
  });

  it(`should return \`У вас закончились все попытки. Ничего, повезёт в следующий раз!\``, () => {
    assert.equal(showResult(resultsOtherPlayers, generateResult(createResultObject, 15, 0, 5)), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });

  it(`should return \`Вы заняли 1 место из 5 игроков. Это лучше, чем у 80% игроков\``, () => {
    assert.equal(showResult(resultsOtherPlayers, generateResult(createResultObject, 20, 3, 15)), `Вы заняли 1 место из 5 игроков. Это лучше, чем у 80% игроков`);
  });
});

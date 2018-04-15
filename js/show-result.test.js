import {assert} from 'chai';
import {showResult} from './show-result.js';

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

const resultTimeOver = {
  score: 15,
  notes: 3,
  time: 0
};

const resultNotesOver = {
  score: 15,
  notes: 0,
  time: 5
};

const resultWinner = {
  score: 20,
  notes: 3,
  time: 15
};

describe(`Show result`, () => {
  it(`should return \`Время вышло! Вы не успели отгадать все мелодии\``, () => {
    assert.equal(showResult(resultsOtherPlayers, resultTimeOver), `Время вышло! Вы не успели отгадать все мелодии`);
  });

  it(`should return \`У вас закончились все попытки. Ничего, повезёт в следующий раз!\``, () => {
    assert.equal(showResult(resultsOtherPlayers, resultNotesOver), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });

  it(`should return \`Вы заняли 1 место из 5 игроков. Это лучше, чем у 80% игроков\``, () => {
    assert.equal(showResult(resultsOtherPlayers, resultWinner), `Вы заняли 1 место из 5 игроков. Это лучше, чем у 80% игроков`);
  });
});

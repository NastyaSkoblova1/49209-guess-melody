import {assert} from 'chai';

export const resultTimeOver = {
  score: 15,
  notes: 3,
  time: 0
};

export const resultNotesOver = {
  score: 15,
  notes: 0,
  time: 5
};

export const showResult = (result) => {
  if (result.time === 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }

  if (result.notes === 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }

  return `Вы заняли i место из t игроков. Это лучше, чем у n% игроков`;
};


describe(`Show result`, () => {
  it(`should return \`Время вышло! Вы не успели отгадать все мелодии\``, () => {
    assert.equal(showResult(resultTimeOver), `Время вышло! Вы не успели отгадать все мелодии`);
  });

  it(`should return \`У вас закончились все попытки. Ничего, повезёт в следующий раз!\``, () => {
    assert.equal(showResult(resultNotesOver), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });
});

import {assert} from 'chai';
import {calculateResult} from './calculate-result.js';

const createAnswerObject = (answerCorrect, answerTime) => ({
  correct: answerCorrect,
  time: answerTime
});

const generateAnswers = (createAnswer, answersCount, answerCorrect, answerTime) => {
  const answers = [];
  let i;
  for (i = 0; i < answersCount; i++) {
    answers.push(createAnswer(answerCorrect, answerTime));
  }
  return answers;
};

let ourNotes = 3;

describe(`Calculate result`, () => {
  it(`should return -1 if less than 10 right answers`, () => {
    assert.equal(calculateResult(generateAnswers(createAnswerObject, 3, true, 30), ourNotes), -1);
  });

  it(`should return 20 if all answers right and fast`, () => {
    assert.equal(calculateResult(generateAnswers(createAnswerObject, 10, true, 15), ourNotes), 20);
  });

  it(`should return 10 if all answers are right and slow`, () => {
    assert.equal(calculateResult(generateAnswers(createAnswerObject, 10, true, 35), ourNotes), 10);
  });

  it(`should return -20 if all answers are wrong`, () => {
    assert.equal(calculateResult(generateAnswers(createAnswerObject, 10, false, 15), ourNotes), -20);
  });

  it(`should not time < 0`, () => {
    assert.throws(() => calculateResult(generateAnswers(createAnswerObject, 10, true, -1), ourNotes), /Time should be >= 0/);
  });
});

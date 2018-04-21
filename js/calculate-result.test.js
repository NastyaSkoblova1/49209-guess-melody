import {assert} from 'chai';
import {createAnswerObject, generateAnswers, calculateResult} from './calculate-result.js';

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
});

import {assert} from 'chai';
import {calculateResult} from './calculate-result.js';

let ourNotes = 3;

const answersLessThanTen = [
  {correct: true, time: 30},
  {correct: false, time: 45},
  {correct: true, time: 15}
];

const answersAllWrong = [
  {correct: false, time: 10},
  {correct: false, time: 5},
  {correct: false, time: 15},
  {correct: false, time: 5},
  {correct: false, time: 10},
  {correct: false, time: 5},
  {correct: false, time: 15},
  {correct: false, time: 5},
  {correct: false, time: 10},
  {correct: false, time: 15}
];

const answersAllRightAndFast = [
  {correct: true, time: 10},
  {correct: true, time: 5},
  {correct: true, time: 15},
  {correct: true, time: 5},
  {correct: true, time: 10},
  {correct: true, time: 5},
  {correct: true, time: 15},
  {correct: true, time: 5},
  {correct: true, time: 10},
  {correct: true, time: 15}
];

describe(`Calculate result`, () => {
  it(`should return -1 if less than 10 right answers`, () => {
    assert.equal(calculateResult(answersLessThanTen, ourNotes), -1);
  });

  it(`should return 20 if all answers right and fast`, () => {
    assert.equal(calculateResult(answersAllRightAndFast, ourNotes), 20);
  });

  it(`should return -20 if all answers are wrong`, () => {
    assert.equal(calculateResult(answersAllWrong, ourNotes), -20);
  });
});

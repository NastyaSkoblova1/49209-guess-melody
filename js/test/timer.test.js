import {assert} from 'chai';
import {setTimer} from './timer.js';

const timeOver = 0;
const timeRemaining = 15;

describe(`Work of timer`, () => {
  it(`should return false if time equal 0`, () => {
    assert.equal(setTimer(timeOver).tick(), false);
  });

  it(`should return 14 if time equal 15`, () => {
    assert.equal(setTimer(timeRemaining).tick(), 14);
  });
});


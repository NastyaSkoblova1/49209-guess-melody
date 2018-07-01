export const gameRules = {
  LEVELS_AMOUNT: 10,
  FAIL_AMOUNT: 2,
  MAX_TIME: 300,
  LIVES: 3,
  MAX_LEVEL: 10,
  QUICK_TIME: 30
};

export const INITIAL_STATE = {
  level: 0,
  mistakes: 0,
  startLevelTime: 0,
  endLevelTime: 0,
  levelTime: 0,
  lives: 3,
  time: gameRules.MAX_TIME,
  answers: [],
  statistics: [6, 12, 15]
};

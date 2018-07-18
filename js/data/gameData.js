export const GAME_RULES = {
  levelsAmount: 10,
  failAmount: 3,
  maxTime: 300,
  quickTime: 30,
  secPerMin: 60,
  minutes: [`минуту`, `минуты`, `минут`],
  seconds: [`секунду`, `секунды`, `секунд`],
  mistakes: [`ошибку`, `ошибки`, `ошибок`],
  quick: [`быстрый`, `быстрых`, `быстрых`],
  points: [`балл`, `балла`, `баллов`]
};

export const INITIAL_STATE = {
  level: 0,
  mistakes: 0,
  startLevelTime: 0,
  endLevelTime: 0,
  levelTime: 0,
  lives: 3,
  time: GAME_RULES.MAX_TIME,
  answer: {
    time: 0,
    answers: []
  }
};

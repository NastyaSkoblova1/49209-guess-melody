export const calculateResult = (answers, notes) => {
  const REQUIRED_ANSWERS_AMOUNT = 10;
  const TIME_LIMIT = 30;
  const FAST_AND_CORRECT = 2;
  const SLOW_AND_CORRECT = 1;
  const WRONG = -2;
  let rightAnswer = 0;

  if (answers.length < REQUIRED_ANSWERS_AMOUNT) {
    return -1;
  }

  answers.forEach((element) => {
    if (element.correct) {
      rightAnswer += element.time >= TIME_LIMIT ? SLOW_AND_CORRECT : FAST_AND_CORRECT;
    } else {
      rightAnswer += WRONG;
      notes = notes + 1;
    }

    if (element.time < 0) {
      throw new Error(`Time should be >= 0`);
    }

  });

  return rightAnswer;
};

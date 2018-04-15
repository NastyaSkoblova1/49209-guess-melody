export const calculateResult = (answers, notes) => {
  let rightAnswer = 0;

  if (answers.length < 10) {
    return -1;
  }

  answers.forEach((element) => {
    if (!element.correct) {
      rightAnswer -= 2;

      if (notes > 0) {
        notes = notes - 1;
      }
    }

    if (element.correct && element.correct >= 30) {
      rightAnswer += 1;
    }

    if (element.correct && element.time < 30) {
      rightAnswer += 2;
    }
  });

  // if (notes === 0) {
  //   return -1;
  // }

  return rightAnswer;
};

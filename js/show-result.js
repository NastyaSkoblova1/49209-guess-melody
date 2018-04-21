export const showResult = (otherResults, ourResult) => {
  let ourScore = ourResult.score;

  if (ourResult.time === 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }

  if (ourResult.notes === 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }

  const scores = otherResults.map((it) => it.score);
  scores.push(ourScore);

  scores.sort((a, b) => {
    return b - a;
  });

  const amountOfPlayers = scores.length;
  const ourPlace = scores.indexOf(ourScore) + 1;
  const percentOfSuccess = (amountOfPlayers - ourPlace) / amountOfPlayers * 100;

  return `Вы заняли ` + ourPlace + ` место из ` + amountOfPlayers + ` игроков. Это лучше, чем у ` + percentOfSuccess + `% игроков`;
};

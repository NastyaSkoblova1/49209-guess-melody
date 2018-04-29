export const main = document.querySelector(`.app`);

export const createElement = (template) => {
  const outer = document.createElement(`div`);
  outer.innerHTML = template;
  return outer.firstElementChild;
};

export const renderScreen = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);
};

export const playAudio = (players) => {
  const audioItems = players.querySelectorAll(`audio`);
  const audioArr = [...audioItems];
  audioArr[0].setAttribute(`autoplay`, true);
  audioArr.forEach((audio, i) => {
    const buttonPlay = audio.nextElementSibling;

    if (i !== 0) {
      buttonPlay.classList.remove(`player-control--pause`);
    }

    buttonPlay.addEventListener(`click`, () => {
      if (audio.paused) {
        audio.play();
        buttonPlay.classList.add(`player-control--pause`);
      } else {
        audio.pause();
        buttonPlay.classList.remove(`player-control--pause`);
      }
    });
  });
};

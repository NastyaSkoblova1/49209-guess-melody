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

export const updateScreen = (parent, view) => {
  parent.innerHTML = ``;
  parent.appendChild(view.element);
};

export const playAudio = (players) => {
  const audioPlayers = [...players.querySelectorAll(`audio`)];
  const buttons = [...players.querySelectorAll(`.player-control`)];
  audioPlayers[0].setAttribute(`autoplay`, true);
  buttons.forEach((btn, i) => {
    const audioPlayer = btn.previousElementSibling;

    if (i !== 0) {
      btn.classList.remove(`player-control--pause`);
    }

    btn.addEventListener(`click`, (event) => {
      if (audioPlayer.paused) {
        audioPlayers.forEach((audio) => {
          audio.pause();
          audio.nextElementSibling.classList.remove(`player-control--pause`);
        });
        audioPlayer.play();
        btn.classList.add(`player-control--pause`);
      } else {
        audioPlayer.pause();
        btn.classList.remove(`player-control--pause`);
      }

      event.preventDefault();
    });
  });
};

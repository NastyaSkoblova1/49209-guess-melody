export const main = document.querySelector(`.app`);

export const createElement = (template = ``, tagName = `div`) => {
  const outer = document.createElement(tagName);
  outer.innerHTML = template.trim();
  return outer;
};

export const renderScreen = (view) => {
  main.innerHTML = ``;
  main.appendChild(view);
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

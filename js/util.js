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

// export const playAudio = () => {
//   const playButtons = document.querySelectorAll(`.player-control`);
//   [...playButtons].forEach((btn) => {
//     const audio = btn.previousElementSibling;
//     btn.addEventListener(`click`, () => {
//       if (audio.paused) {
//         audio.play();
//         btn.classList.add(`.player-control--pause`);
//       } else {
//         audio.pause();
//         btn.classList.remove(`.player-control--pause`);
//       }
//     });
//   });
// };

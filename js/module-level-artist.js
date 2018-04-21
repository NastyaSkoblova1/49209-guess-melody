import {main, createElement} from './util.js';
import {initialState, gameData} from './data.js';
import renderHeader from './header.js';

// const levelArtist = {
//   audioQuestion: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
//   answers: new Set([`Пелагея`, `Краснознаменная дивизия имени моей бабушки`, `Lorde`])
// };

const renderArtistVariants = () => {
  return `
  ${[...gameData[`level-` + initialState.level].answers].map((answer, i) => `
  <div class="main-answer-wrapper">
    <input class="main-answer-r" type="radio" id="answer-${i + 1}" name="answer" value="val-${i + 1}"/>
    <label class="main-answer" for="answer-${i + 1}">
      <img class="main-answer-preview" src="${answer.image}"
            alt="${answer.artist}" width="134" height="134">
      ${answer.artist}
    </label>
  </div>`).join(``)}`;
};

const levelArtistElementTemplate = () => `
<section class="main main--level main--level-artist">
  ${renderHeader()}
  <div class="main-wrap">
    <h2 class="title main-title">Кто исполняет эту песню?</h2>
    <div class="player-wrapper">
      <div class="player">
        <audio src="${gameData[`level-` + initialState.level].src}"></audio>
        <button class="player-control player-control--pause"></button>
        <div class="player-track">
          <span class="player-status"></span>
        </div>
      </div>
    </div>;
    <form class="main-list">
    ${renderArtistVariants(gameData)}
    </form>
  </div></section>`;

// const levelArtistElement = createElement(levelArtistElementTemplate());
const levelArtistElement = createElement(levelArtistElementTemplate());

const renderScreen = (game) => {
  main.innerHTML = ``;
  main.appendChild(createElement(levelArtistElementTemplate(game[`level-` + initialState.level])));
};

const mainAnswer = levelArtistElement.querySelectorAll(`.main-answer`);
const mainAnswerToArray = [...mainAnswer];

mainAnswerToArray.forEach(function (element) {
  element.addEventListener(`click`, () => {
    initialState.level += 1;
    renderScreen(gameData);
  });
});

export default levelArtistElement;

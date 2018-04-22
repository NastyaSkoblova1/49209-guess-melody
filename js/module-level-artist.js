import {main, createElement} from './util.js';
import {initialState, levels} from './data.js';
import renderHeader from './header.js';

// const levelArtist = {
//   audioQuestion: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
//   answers: new Set([`Пелагея`, `Краснознаменная дивизия имени моей бабушки`, `Lorde`])
// };

const renderArtistVariants = (level) => {
  return `
  ${[...level.answers].map((answer, i) => `
  <div class="main-answer-wrapper">
    <input class="main-answer-r" type="radio" id="answer-${i + 1}" name="answer" value="val-${i + 1}"/>
    <label class="main-answer" for="answer-${i + 1}">
      <img class="main-answer-preview" src="${answer.image}"
            alt="${answer.artist}" width="134" height="134">
      ${answer.artist}
    </label>
  </div>`).join(``)}`;
};

const levelArtistElementTemplate = (level) => `
<section class="main main--level main--level-artist">
  ${renderHeader()}
  <div class="main-wrap">
    <h2 class="title main-title">Кто исполняет эту песню?</h2>
    <div class="player-wrapper">
      <div class="player">
        <audio src="${level.src}"></audio>
        <button class="player-control player-control--pause"></button>
        <div class="player-track">
          <span class="player-status"></span>
        </div>
      </div>
    </div>;
    <form class="main-list">
    ${renderArtistVariants(level)}
    </form>
  </div></section>`;

const levelArtistElement = createElement(levelArtistElementTemplate(levels[`level-` + initialState.level]));

const mainList = levelArtistElement.querySelector(`.main-list`);

const renderScreen = () => {
  initialState.level += 1;
  main.innerHTML = ``;
  main.appendChild(createElement(levelArtistElementTemplate(levels[`level-` + initialState.level])));
};

mainList.addEventListener(`change`, renderScreen);

export default levelArtistElement;

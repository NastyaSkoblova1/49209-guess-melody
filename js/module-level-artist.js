import {createElement, changeView} from './util.js';
import renderHeader from './header.js';
import levelGenreElement from './module-level-genre.js';

const levelArtist = {
  audioQuestion: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
  answers: new Set([`Пелагея`, `Краснознаменная дивизия имени моей бабушки`, `Lorde`])
};

const renderAudioPlayer = () => {
  return `
    <h2 class="title main-title">Кто исполняет эту песню?</h2>
      <div class="player-wrapper">
        <div class="player">
          <audio></audio>
          <button class="player-control player-control--pause"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>`;
};

const renderArtistVariants = () => {
  return `
    <form class="main-list">
      ${[...levelArtist.answers].map((answer, i) => `
        <div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-${i + 1}" name="answer" value="val-${i + 1}"/>
          <label class="main-answer" for="answer-${i + 1}">
            <img class="main-answer-preview" src="http://placehold.it/134x134"
                 alt="${answer}" width="134" height="134">
            ${answer}
          </label>
        </div>`)}
    </form>`;
};

const levelArtistElementTemplate = `
  <section class="main main--level main--level-artist">
    ${renderHeader()}
    <div class="main-wrap">
      ${renderAudioPlayer()}
      ${renderArtistVariants()}
    </div></section>`;

const levelArtistElement = createElement(levelArtistElementTemplate);
const mainAnswer = levelArtistElement.querySelectorAll(`.main-answer`);
const mainAnswerToArray = [...mainAnswer];

mainAnswerToArray.forEach(function (element) {
  element.addEventListener(`click`, () => {
    changeView(levelGenreElement);
  });
});

export default levelArtistElement;

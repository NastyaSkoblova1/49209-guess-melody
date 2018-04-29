import {createElement, playAudio} from './util.js';
import {levels} from './data.js';
import {calculateResult, showResult} from './gameplay.js';
import renderHeader from './header.js';

const renderArtistVariants = (level) => {
  return `
  ${[...level.answers].map((answer, i) => `
  <div class="main-answer-wrapper">
    <input class="main-answer-r" type="radio" id="answer-${i + 1}" name="answer" value="val-${i + 1}"/>
    <label class="main-answer" data-id="${answer.id}" for="answer-${i + 1}">
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
    </div>
    <form class="main-list">
    ${renderArtistVariants(level)}
    </form>
  </div></section>`;

const levelArtistElement = (data) => {
  const levelArtist = createElement(levelArtistElementTemplate(levels[data.level]));
  const mainAnswers = levelArtist.querySelectorAll(`.main-answer`);
  const playerWrapper = levelArtist.querySelector(`.player-wrapper`);

  [...mainAnswers].forEach((mainAnswer) => {
    mainAnswer.addEventListener(`click`, () => {
      calculateResult(mainAnswer);
      showResult();
    });
  });

  playAudio(playerWrapper);

  return levelArtist;
};

export default levelArtistElement;

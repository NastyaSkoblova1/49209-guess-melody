import {createElement, playAudio} from './util.js';
import {levels, scoreVariables, changeLevel} from './data.js';
import renderHeader from './header.js';

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
        <audio src="${level.src}" autoplay></audio>
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

  [...mainAnswers].forEach((mainAnswer) => {
    mainAnswer.addEventListener(`click`, () => {
      data.level++;
      if (mainAnswer.innerText === levels[data.level].rightAnswer) {
        data.score += scoreVariables.SLOW_AND_CORRECT;
      } else {
        data.notes += 1;
      }

      if (data.notes < 3) {
        changeLevel(levels[data.level].type);
      } else {
        changeLevel();
      }

    });
  });

  playAudio();

  return levelArtist;
};

export default levelArtistElement;

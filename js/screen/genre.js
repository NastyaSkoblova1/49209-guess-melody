import {createElement, playAudio} from '../util.js';
import {levels} from '../data.js';
import {calculateResult, showResult} from '../gameplay.js';
import renderHeader from './header.js';

const renderGenreQuestion = (level) => {
  return `
    <h2 class="title">${level.question}</h2>`;
};

const renderGenreVariants = (level) => {
  return `
  <form class="genre">
    ${[...level.answers].map((answer, i) => `
      <div class="genre-answer">
        <div class="player-wrapper">
          <div class="player">
            <audio src="${answer.src}"></audio>
            <button class="player-control player-control--pause player-control--play" type="button"></button>
            <div class="player-track">
              <span class="player-status"></span>
            </div>
          </div>
        </div>
        <input type="checkbox" name="answer" value="${answer.genre}" id="a-${i + 1}" data-id="${answer.id}">
        <label class="genre-answer-check" for="a-${i + 1}"></label>
      </div>`).join(``)}
    <button class="genre-answer-send" type="submit">Ответить</button>
  </form>`;
};

const levelGenreElementTemplate = (level) => `
  <section class="main main--level main--level-genre">
    ${renderHeader()}
    <div class="main-wrap">
      ${renderGenreQuestion(level)}
      ${renderGenreVariants(level)}
    </div>
  </section>`;

const levelGenreElement = (data) => {
  const levelGenre = createElement(levelGenreElementTemplate(levels[data.level]));
  const buttonGenreAnswer = levelGenre.querySelector(`.genre-answer-send`);
  const answerCheck = levelGenre.querySelectorAll(`.genre-answer input`);
  const form = levelGenre.querySelector(`.genre`);
  const answerCheckArray = [...answerCheck];
  buttonGenreAnswer.disabled = true;

  const checkAnswer = () => answerCheckArray.some((element) => element.checked);

  const removeDisabledFromButton = () => {
    buttonGenreAnswer.disabled = !checkAnswer();
  };

  form.addEventListener(`change`, () => {
    removeDisabledFromButton();
  });

  form.addEventListener(`submit`, () => {
    const answersChecked = document.querySelectorAll(`.genre-answer input:checked`);
    [...answersChecked].forEach((answerChecked) => {
      calculateResult(answerChecked);
    });
    showResult();
  });

  playAudio(form);

  return levelGenre;
};

export default levelGenreElement;

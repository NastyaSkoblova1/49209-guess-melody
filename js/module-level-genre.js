import {createElement, changeView} from './util.js';
import resultElement from './module-result.js';
import renderHeader from './header.js';
import resultEffortsElement from './module-result-efforts.js';
import resultTimeElement from './module-result-time.js';


const levelGenre = {
  textQuestion: `Выберите инди-рок треки`,
  answers: new Set([`https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
    `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
    `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
    `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`])
};

const renderGenreQuestion = () => {
  return `
    <h2 class="title">${levelGenre.textQuestion}</h2>`;
};

const renderGenreVariants = () => {
  return `
  <form class="genre">
    ${[...levelGenre.answers].map((answer, i) => `
        <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio></audio>
              <button class="player-control player-control--pause player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="a-${i + 1}">
          <label class="genre-answer-check" for="a-${i + 1}"></label>
        </div>
    `)}
  <button class="genre-answer-send" type="submit">Ответить</button>
  </form>`;
};

const levelGenreElementTemplate = `
  <section class="main main--level main--level-genre">
    ${renderHeader()};
    <div class="main-wrap">
      ${renderGenreQuestion()}
      ${renderGenreVariants()}
    </div>
  </section>`;

const levelGenreElement = createElement(levelGenreElementTemplate);
const buttonGenreAnswer = levelGenreElement.querySelector(`.genre-answer-send`);
const playerControl = levelGenreElement.querySelectorAll(`.player-control`);
const answerCheck = levelGenreElement.querySelectorAll(`.genre-answer input`);
const form = levelGenreElement.querySelector(`.genre`);
const resultDisplayArr = [resultElement, resultEffortsElement, resultTimeElement];
const playerControlArray = [...playerControl];
const answerCheckArray = [...answerCheck];
buttonGenreAnswer.disabled = true;

playerControlArray.forEach((element) => {
  element.disabled = true;
});

const getNumberOfResultDisplay = () => Math.floor(Math.random() * resultDisplayArr.length);

const checkAnswer = () => answerCheckArray.some((element) => element.checked);

const removeDisabledFromButton = () => {
  buttonGenreAnswer.disabled = !checkAnswer();
};

const changeScreenOnResult = (e) => {
  e.preventDefault();
  changeView(resultDisplayArr[getNumberOfResultDisplay()]);
};

form.addEventListener(`change`, removeDisabledFromButton);
form.addEventListener(`submit`, changeScreenOnResult);

export default levelGenreElement;

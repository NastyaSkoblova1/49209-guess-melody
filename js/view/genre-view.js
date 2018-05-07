import {playAudio} from '../util.js';
import AbstractView from './abstract-view';

export default class GenreView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    return `
      <section class="main main--level main--level-genre">
        <div class="main-wrap">
          <h2 class="title">${this.level.question}</h2>
          <form class="genre">
            ${[...this.level.answers].map((answer, i) => `
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
          </form>
        </div>
      </section>`;
  }

  bind() {
    const buttonGenreAnswer = this.element.querySelector(`.genre-answer-send`);
    const form = this.element.querySelector(`.genre`);
    const answerCheck = this.element.querySelectorAll(`.genre-answer input`);
    const answerCheckArray = [...answerCheck];
    buttonGenreAnswer.disabled = true;

    const checkAnswer = () => answerCheckArray.some((element) => element.checked);
    const removeDisabledFromButton = () => {
      buttonGenreAnswer.disabled = !checkAnswer();
    };

    form.addEventListener(`change`, () => {
      removeDisabledFromButton();
    });

    form.addEventListener(`submit`, (e) => {
      e.preventDefault();
      const answersChecked = document.querySelectorAll(`.genre-answer input:checked`);
      [...answersChecked].forEach((answerChecked) => {
        this.onAnswer(answerChecked);
      });
    });

    playAudio(form);
  }

  /**
   * Обработка ответов пользователя
   * @param {string} answer Элемент с ответом пользователя
   */
  onAnswer(answer) {}
}

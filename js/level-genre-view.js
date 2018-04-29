import AbstractView from './abstract-view';

export default class GenreView extends AbstractView {
  constructor(header, variants, level) {
    super();
    this.header = header;
    this.level = level;
  }

  get template() {
    return `
      <section class="main main--level main--level-genre">
        ${this.header}
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
    buttonGenreAnswer.disabled = true;

    form.addEventListener(`change`, () => {
      this.onFormChange();
    });

    form.addEventListener(`submit`, () => {
      this.onFormSubmit();
    });
  }

  onFormChange() {

  }

  onFormSubmit() {

  }
}

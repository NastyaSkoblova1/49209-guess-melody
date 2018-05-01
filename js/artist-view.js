import AbstractView from './abstract-view';

export default class ArtistView extends AbstractView {
  constructor(header, variants, level) {
    super();
    this.header = header;
    this.level = level;
  }

  get template() {
    return `
      <section class="main main--level main--level-artist">
        ${this.header}
        <div class="main-wrap">
          <h2 class="title main-title">Кто исполняет эту песню?</h2>
          <div class="player-wrapper">
            <div class="player">
              <audio src="${this.level.src}"></audio>
              <button class="player-control player-control--pause"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <form class="main-list">
            ${[...this.level.answers].map((answer, i) => `
            <div class="main-answer-wrapper">
              <input class="main-answer-r" type="radio" id="answer-${i + 1}" name="answer" value="val-${i + 1}"/>
              <label class="main-answer" data-id="${answer.id}" for="answer-${i + 1}">
                <img class="main-answer-preview" src="${answer.image}"
                      alt="${answer.artist}" width="134" height="134">
                ${answer.artist}
              </label>
            </div>`).join(``)}
          </form>
        </div>
      </section>`;
  }

  bind() {
    const mainAnswers = this.element.querySelectorAll(`.main-answer`);

    [...mainAnswers].forEach((mainAnswer) => {
      mainAnswer.addEventListener(`click`, () => {
        this.onAnswerClick(mainAnswer);
      });
    });
  }

  onAnswerClick(answer) {}
}

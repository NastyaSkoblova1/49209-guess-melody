import AbstractView from './abstract-view';

export default class ResultView extends AbstractView {
  constructor(state, result) {
    super();
    this.state = state;
    this.result = result;
  }

  get template() {
    return `
      <section class="main main--result">
        <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
        <h2 class="title">Вы настоящий меломан!</h2>
        <div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
          <br>вы&nbsp;набрали ${this.state.score} баллов (${this.state.fastAnswer} быстрых)
          <br>совершив ${this.state.notes} ошибки</div>
        <span class="main-comparison">Вы заняли ${this.result.place} место из ${this.result.players}. 
        Это&nbsp;лучше чем у&nbsp;${this.result.percent}%&nbsp;игроков</span>
        <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
      </section>`;
  }

  bind() {
    const buttonRestart = this.element.querySelector(`button.main-replay`);
    buttonRestart.addEventListener(`click`, () => {
      this.onRestartClick();
    });
  }

  onRestartClick() {}
}

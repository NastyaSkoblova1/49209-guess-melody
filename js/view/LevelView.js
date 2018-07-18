import AbstractView from './AbstractView.js';

export default class LevelView extends AbstractView {
  constructor() {
    super();
    this.cursor = 0;
    this.symbolSeq = `/—\\|`;
  }

  get template() {
    return `<div></div>`;
  }

  start() {
    this.cursor = ++this.cursor >= this.symbolSeq.length ? 0 : this.cursor;
    this.element.textContent = this.symbolSeq[this.cursor];
    this.timeout = setTimeout(() => this.start, 50);
  }

  stop() {
    clearTimeout(this.timeout);
  }
}

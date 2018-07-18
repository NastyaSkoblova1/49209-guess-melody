import WelcomeView from './view/WelcomeView.js';
import ErrorView from './view/ErrorView.js';
import WinnerResultView from './view/WinnerResultView.js';
import LevelView from './view/LevelView.js';
import GameScreen from './GameScreen.js';
import GameModel from './GameModel.js';
import Levels from './data/levelsData.js';

let gameData;
const main = document.querySelector(`.main`);

const changeView = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);
};

export default class Application {
  static start() {
    const splash = new LevelView();
    changeView(splash.element);
    splash.start();
    Levels.loadData()
        .then(this.showWelcome)
        .catch(this.showError)
        .then(() => splash.stop());
  }

  static showWelcome(data) {
    gameData = data;
    const welcome = new WelcomeView();
    welcome.element.className = `main main--welcome`;
    changeView(welcome.element);
  }

  static showGame() {
    const model = new GameModel(gameData);
    const gameScreen = new GameScreen(model);
    changeView(gameScreen.element);
    gameScreen.startGame();
  }

  static showStats(model) {
    const splash = new LevelView();
    changeView(splash.element);
    splash.start();
    Levels.saveResults(model.answer)
        .then(() => Levels.loadResults())
        .then((data) => {
          const win = new WinnerResultView(model, data);
          win.element.className = `main main--result`;
          changeView(win.element);
        })
        .catch(this.showError)
        .then(() => splash.stop());
  }

  static showEnd(view) {
    const endScreen = view;
    endScreen.element.className = `main main--result`;
    changeView(endScreen.element);
  }

  static showError(error) {
    const errorView = new ErrorView(error);
    changeView(errorView.element);
  }
}

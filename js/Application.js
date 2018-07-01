import WelcomeView from './view/WelcomeView.js';
import GameScreen from './GameScreen.js';
import GameModel from './GameModel.js';

const main = document.querySelector(`.main`);

const changeView = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);
};

export default class Application {
  static showWelcome() {
    const welcome = new WelcomeView();
    welcome.element.className = `main main--welcome`;
    changeView(welcome.element);
  }

  static showGame() {
    const model = new GameModel();
    const gameScreen = new GameScreen(model);
    changeView(gameScreen.element);
    gameScreen.startGame();
  }

  static showStats(view) {
    view.element.className = `main main--result`;
    changeView(view.element);
  }
}

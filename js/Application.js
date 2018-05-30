import Welcome from './view/welcome-view.js';
import GameModel from './GameScreen.js';
import GameScreen from './GameModel.js';

export const main = document.querySelector(`.app`);

export const changeView = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);
};

export default class Application() {
  static showWelcome() {
    const welcome = new WelcomeScreen();
    changeView(welcome.element);
  }

  static showGame(userName) {
    const model = new GameModel();
    const gameScreen = new GameScreen(model);
    changeView(gameScreen.element);
    gameScreen.startGame();
  }

  static showStats(stats) {
    const statistics = new StatsScreen(stats);
    changeView(statistics.element); 
  }
}
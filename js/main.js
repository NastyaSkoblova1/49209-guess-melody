import {renderScreen} from './util.js';
import gameScreen from './app.js';
import {startGame} from './app.js';
import WelcomeView from './view/welcome-view.js';

const welcome = new WelcomeView();

renderScreen(welcome.element);

welcome.onStartClick = () => {
  renderScreen(gameScreen);
  startGame();
};

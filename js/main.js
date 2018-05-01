import gameScreen from './game-screen.js';
import WelcomeView from './welcome-view.js';
import {renderScreen} from './util.js';

const welcome = new WelcomeView();

renderScreen(welcome.element);

welcome.onStartClick = () => {
  renderScreen(gameScreen);
};

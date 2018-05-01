import {renderScreen} from './util.js';
import gameContainerElement from './game-screen.js';
import WelcomeView from './welcome-view.js';

const welcome = new WelcomeView();

renderScreen(welcome.element);

welcome.onStartClick = () => {
  renderScreen(gameContainerElement);
};

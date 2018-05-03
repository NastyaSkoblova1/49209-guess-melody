import {renderScreen} from './util.js';
import gameContainerElement from './app.js';
import WelcomeView from './view/welcome-view.js';

const welcome = new WelcomeView();

renderScreen(welcome);

welcome.onStartClick = () => {
  renderScreen(gameContainerElement);
};

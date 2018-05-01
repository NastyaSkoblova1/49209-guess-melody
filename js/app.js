import GenreView from './genre-view.js';
import {showResult, calculateResult} from './util.js';

export default () => {
  const genre = new GenreView();

  genre.onFormSubmit = () => {
    const answersChecked = document.querySelectorAll(`.genre-answer input:checked`);
    [...answersChecked].forEach((answerChecked) => {
      calculateResult(answerChecked);
    });
    showResult();
  };
};

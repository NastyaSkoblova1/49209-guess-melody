import GenreView from './genre-view.js';
import ArtistView from './artist-view.js';
import {calculateResult, showResult} from './gameplay.js';

export default () => {
  const artist = new ArtistView();
  const genre = new GenreView();

  genre.onFormSubmit = () => {
    const answersChecked = document.querySelectorAll(`.genre-answer input:checked`);
    [...answersChecked].forEach((answerChecked) => {
      calculateResult(answerChecked);
    });
    showResult();
  };

  artist.onAnswerClick = (answer) => {
    calculateResult(answer);
    showResult();
  };
};

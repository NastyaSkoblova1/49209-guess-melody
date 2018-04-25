import {renderScreen} from './util.js';
import levelArtistElement from './module-level-artist.js';
import levelGenreElement from './module-level-genre.js';
import resultElement from './module-result.js';
import resultEffortsElement from './module-result-efforts.js';

const otherInitialState = [
  {
    score: 18,
    notes: 2,
    time: 5
  },
  {
    score: 5,
    notes: 2,
    time: 0
  },
  {
    score: 12,
    notes: 1,
    time: 15
  },
  {
    score: -5,
    notes: 1,
    time: 10
  }
];

export const scoreVariables = {
  REQUIRED_ANSWERS_AMOUNT: 10,
  TIME_LIMIT: 30,
  FAST_AND_CORRECT: 2,
  SLOW_AND_CORRECT: 1,
  WRONG: -2
};

export const initialState = {
  level: 1,
  score: 0,
  notes: 0,
  time: 300
};

export const levels = {
  1: {
    type: `artist`,
    src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
    rightAnswer: `Audionautix`,
    answers: [
      {
        artist: `Audionautix`,
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`
      },
      {
        artist: `Riot`,
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`
      },
      {
        artist: `Gunnar Olsen`,
        image: `https://f4.bcbits.com/img/0004181452_10.jpg`
      }
    ]
  },
  2: {
    type: `artist`,
    src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
    rightAnswer: `Kevin MacLeod`,
    answers: [
      {
        artist: `Kevin MacLeod`,
        image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`
      },
      {
        artist: `Riot`,
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`
      },
      {
        artist: `Jingle Punks`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`
      }
    ]
  },
  3: {
    type: `artist`,
    src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
    rightAnswer: `Riot`,
    answers: [
      {
        artist: `Riot`,
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`
      },
      {
        artist: `Jingle Punks`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`
      },
      {
        artist: `Gunnar Olsen`,
        image: `https://f4.bcbits.com/img/0004181452_10.jpg`
      }
    ]
  },
  4: {
    type: `artist`,
    src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
    rightAnswer: `Jingle Punks`,
    answers: [
      {
        artist: `Jingle Punks`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`
      },
      {
        artist: `Kevin MacLeod`,
        image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`
      },
      {
        artist: `Gunnar Olsen`,
        image: `https://f4.bcbits.com/img/0004181452_10.jpg`
      }
    ]
  },
  5: {
    type: `artist`,
    src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
    rightAnswer: `Jingle Punks`,
    answers: [
      {
        artist: `Audionautix`,
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`
      },
      {
        artist: `Jingle Punks`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`
      },
      {
        artist: `Gunnar Olsen`,
        image: `https://f4.bcbits.com/img/0004181452_10.jpg`
      },
    ]
  },
  6: {
    type: `genre`,
    question: `Выберите электронные треки`,
    genreQuestion: `Electronic`,
    answers: [
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `R&B`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`
      }
    ]
  },
  7: {
    type: `genre`,
    question: `Выберите джаз треки`,
    genreQuestion: `Jazz`,
    answers: [
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        genre: `Jazz`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`
      }
    ]
  },
  8: {
    type: `genre`,
    question: `Выберите поп треки`,
    genreQuestion: `Pop`,
    answers: [
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        genre: `Jazz`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `R&B`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`
      }
    ]
  },
  9: {
    type: `genre`,
    question: `Выберите рок треки`,
    genreQuestion: `Rock`,
    answers: [
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `R&B`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`
      }
    ]
  },
  10: {
    type: `genre`,
    question: `Выберите кантри треки`,
    genreQuestion: `Country`,
    answers: [
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `R&B`
      }
    ]
  }
};

const compareResult = () => {
  const scores = otherInitialState.map((it) => it.score);
  scores.push(initialState.score);

  scores.sort((a, b) => {
    return b - a;
  });

  const amountOfPlayers = scores.length;
  const ourPlace = scores.indexOf(initialState.score) + 1;
  const ourPercent = (amountOfPlayers - ourPlace) / amountOfPlayers * 100;


  const resultState = {
    players: amountOfPlayers,
    place: ourPlace,
    percent: ourPercent
  };

  return resultState;
};

const restartGame = () => {
  const restartBtn = document.querySelector(`.main-replay`);
  restartBtn.addEventListener(`click`, () => {
    initialState.level = 1;
    initialState.score = 0;
    initialState.notes = 0;
    initialState.time = 300;
    renderScreen(levelArtistElement(initialState));
  });
};

export const changeLevel = (levelType) => {
  if (initialState.level >= 10) {
    renderScreen(resultElement(initialState, compareResult()));
    restartGame();
  }

  // if (initialState.notes === 3) {
  //   renderScreen(resultEffortsElement(initialState));
  //   restartGame();
  // }

  if (levelType === `artist`) {
    renderScreen(levelArtistElement(initialState));
  }

  if (levelType === `genre`) {
    renderScreen(levelGenreElement(initialState));
  }
};

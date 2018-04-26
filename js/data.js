export const otherInitialState = [
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

export const scoreConst = {
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
    rightAnswer: 1,
    answers: [
      {
        id: 1,
        artist: `Audionautix`,
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`
      },
      {
        id: 2,
        artist: `Riot`,
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`
      },
      {
        id: 3,
        artist: `Gunnar Olsen`,
        image: `https://f4.bcbits.com/img/0004181452_10.jpg`
      }
    ]
  },
  2: {
    type: `artist`,
    src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
    rightAnswer: 1,
    answers: [
      {
        id: 1,
        artist: `Kevin MacLeod`,
        image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`
      },
      {
        id: 2,
        artist: `Riot`,
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`
      },
      {
        id: 3,
        artist: `Jingle Punks`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`
      }
    ]
  },
  3: {
    type: `artist`,
    src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
    rightAnswer: 2,
    answers: [
      {
        id: 1,
        artist: `Jingle Punks`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`
      },
      {
        id: 2,
        artist: `Riot`,
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`
      },
      {
        id: 3,
        artist: `Gunnar Olsen`,
        image: `https://f4.bcbits.com/img/0004181452_10.jpg`
      }
    ]
  },
  4: {
    type: `artist`,
    src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
    rightAnswer: 3,
    answers: [
      {
        id: 1,
        artist: `Kevin MacLeod`,
        image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`
      },
      {
        id: 2,
        artist: `Gunnar Olsen`,
        image: `https://f4.bcbits.com/img/0004181452_10.jpg`
      },
      {
        id: 3,
        artist: `Jingle Punks`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`
      }
    ]
  },
  5: {
    type: `artist`,
    src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
    rightAnswer: 2,
    answers: [
      {
        id: 1,
        artist: `Audionautix`,
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`
      },
      {
        id: 2,
        artist: `Jingle Punks`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`
      },
      {
        id: 3,
        artist: `Gunnar Olsen`,
        image: `https://f4.bcbits.com/img/0004181452_10.jpg`
      },
    ]
  },
  6: {
    type: `genre`,
    question: `Выберите электронные треки`,
    rightAnswer: 3,
    answers: [
      {
        id: 1,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`
      },
      {
        id: 2,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`
      },
      {
        id: 3,
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `Electronic`
      },
      {
        id: 4,
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`
      }
    ]
  },
  7: {
    type: `genre`,
    question: `Выберите джаз треки`,
    rightAnswer: 2,
    answers: [
      {
        id: 1,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`
      },
      {
        id: 2,
        src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        genre: `Jazz`
      },
      {
        id: 3,
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`
      },
      {
        id: 4,
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`
      }
    ]
  },
  8: {
    type: `genre`,
    question: `Выберите поп треки`,
    rightAnswer: 1,
    answers: [
      {
        id: 1,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`
      },
      {
        id: 2,
        src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        genre: `Jazz`
      },
      {
        id: 3,
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `R&B`
      },
      {
        id: 4,
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`
      }
    ]
  },
  9: {
    type: `genre`,
    question: `Выберите рок треки`,
    rightAnswer: 2,
    answers: [
      {
        id: 1,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`
      },
      {
        id: 2,
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`
      },
      {
        id: 3,
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `R&B`
      },
      {
        id: 4,
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`
      }
    ]
  },
  10: {
    type: `genre`,
    question: `Выберите кантри треки`,
    rightAnswer: 3,
    answers: [
      {
        id: 1,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`
      },
      {
        id: 2,
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`
      },
      {
        id: 3,
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`
      },
      {
        id: 4,
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `R&B`
      }
    ]
  }
};

export const initialState = {
  level: 1,
  notes: 0,
  time: 300
};

export const levels = {
  'level-1': {
    type: `artist`,
    src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
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
  'level-2': {
    type: `artist`,
    src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
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
  'level-3': {
    type: `artist`,
    src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
    answers: [
      {
        artist: `Jingle Punks`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`
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
  'level-4': {
    type: `artist`,
    src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
    answers: [
      {
        artist: `Jingle Punks`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`
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
  'level-5': {
    type: `artist`,
    src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
    answers: [
      {
        artist: `Audionautix`,
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`
      },
      {
        artist: `Jingle Punks`,
        images: `https://i.vimeocdn.com/portrait/992615_300x300`
      },
      {
        artist: `Gunnar Olsen`,
        image: `https://f4.bcbits.com/img/0004181452_10.jpg`
      },
    ]
  },
  'level-6': {
    type: `genre`,
    question: `Выберите электронные треки`,
    genre: `Electronic`,
    answers: [
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
      }
    ]
  },
  'level-7': {
    type: `genre`,
    question: `Выберите джаз треки`,
    genre: `Jazz`,
    answers: [
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
      }
    ]
  },
  'level-8': {
    type: `genre`,
    question: `Выберите поп треки`,
    genre: `Pop`,
    answers: [
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
      }
    ]
  },
  'level-9': {
    type: `genre`,
    question: `Выберите рок треки`,
    genre: `Rock`,
    answers: [
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
      }
    ]
  },
  'level-10': {
    type: `genre`,
    question: `Выберите кантри треки`,
    genre: `Country`,
    answers: [
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
      }
    ]
  }
};

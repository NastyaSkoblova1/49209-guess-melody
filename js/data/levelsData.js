const LEVELS_URL = `https://es.dump.academy/guess-melody`;
const APP_ID = `49209`;

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

const toJSON = (res) => res.json();

export default class Levels {
  static loadData() {
    return fetch(`${LEVELS_URL}/questions`)
        .then(checkStatus)
        .then(toJSON);
  }

  static loadResults() {
    return fetch(`${LEVELS_URL}/stats/${APP_ID}`)
        .then(checkStatus)
        .then(toJSON);
  }

  static saveResults(data) {
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };
    return fetch(`${LEVELS_URL}/stats/${APP_ID}`, requestSettings)
        .then(checkStatus);
  }
}

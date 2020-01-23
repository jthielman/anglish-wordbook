import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getWords = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/words.json?orderBy="word"&limitToFirst=10`)
    .then((result) => {
      const tenWordsObj = result.data;
      const words = [];
      if (tenWordsObj != null) {
        Object.keys(tenWordsObj).forEach((wordId) => {
          const newWord = tenWordsObj[wordId];
          newWord.id = wordId;
          words.push(newWord);
        });
      }
      resolve(words);
    })
    .catch((err) => reject(err));
});

export default { getWords };

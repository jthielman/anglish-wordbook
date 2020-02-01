import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getWords = () => new Promise((resolve, reject) => {
  // axios.get(`${baseUrl}/words.json?orderBy="word"&limitToFirst=20`)
  axios.get(`${baseUrl}/words.json?orderBy="word"&startAt="a"&endAt="b"`)
    .then((result) => {
      const wordsObj = result.data;
      const words = [];
      if (wordsObj != null) {
        Object.keys(wordsObj).forEach((wordId) => {
          const newWord = wordsObj[wordId];
          newWord.id = wordId;
          words.push(newWord);
        });
      }
      resolve(words);
    })
    .catch((err) => reject(err));
});

const getNextWords = (startingWord) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/words.json?orderBy="word"&startAt="${startingWord}"&limitToFirst=11`)
    .then((result) => {
      const elevenWordsObj = result.data;
      const words = [];
      if (elevenWordsObj != null) {
        Object.keys(elevenWordsObj).forEach((wordId) => {
          const newWord = elevenWordsObj[wordId];
          newWord.id = wordId;
          words.push(newWord);
        });
      }
      resolve(words);
    })
    .catch((err) => reject(err));
});

const getFormerWords = (endingWord) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/words.json?orderBy="word"&endAt="${endingWord}"&limitToLast=11`)
    .then((result) => {
      const elevenWordsObj = result.data;
      const words = [];
      if (elevenWordsObj != null) {
        Object.keys(elevenWordsObj).forEach((wordId) => {
          const newWord = elevenWordsObj[wordId];
          newWord.id = wordId;
          words.push(newWord);
        });
      }
      resolve(words);
    })
    .catch((err) => reject(err));
});

const getOneWord = (wordId) => axios.get(`${baseUrl}/words/${wordId}.json`);

const stowWord = (wordInfo) => axios.post(`${baseUrl}/words.json`, wordInfo);

const updateWord = (wordId, newWordInfo) => axios.put(`${baseUrl}/words/${wordId}.json`, newWordInfo);

const deleteWord = (wordId) => axios.delete(`${baseUrl}/words/${wordId}.json`);

export default {
  getWords, getOneWord, stowWord, updateWord, deleteWord, getNextWords, getFormerWords,
};

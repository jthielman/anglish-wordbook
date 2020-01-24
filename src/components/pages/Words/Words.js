import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import wordData from '../../../helpers/data/wordData';

import HitWord from '../../shared/HitWord/HitWord';

import './Words.scss';

class Words extends React.Component {
  state = {
    words: [],
  }

  getWords = () => {
    wordData.getWords()
      .then((words) => this.setState({ words }))
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getWords();
  }

  render() {
    const wordId = '12345';
    const user = firebase.auth().currentUser;
    return (
      <div className='Words'>
        <h1>Words</h1>
        { user ? <Link className='btn' to={`/words/${wordId}/adight`}>adight</Link> : <div>you logged out</div> }
        <Link className='btn' to={`/words/${wordId}`}>one word</Link>
        <div>
          { this.state.words.map((word) => <HitWord key={word.id} word={word}>{word.word}</HitWord>) }
        </div>
      </div>
    );
  }
}

export default Words;

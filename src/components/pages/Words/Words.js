import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import './Words.scss';
import wordData from '../../../helpers/data/wordData';

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
        <div>{this.state.words.map((word) => <h6 key={word.id}>{word.word}</h6>)}</div>
      </div>
    );
  }
}

export default Words;

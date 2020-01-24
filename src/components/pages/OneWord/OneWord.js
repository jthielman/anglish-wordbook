import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import wordData from '../../../helpers/data/wordData';

import './OneWord.scss';

class OneWord extends React.Component {
  state = {
    word: {},
  }

  getWord = (wordId) => {
    wordData.getOneWord(wordId)
      .then((response) => this.setState({ word: response.data }))
      .catch((err) => console.error('error in get word', err));
  }

  componentDidMount() {
    const { wordId } = this.props.match.params;
    this.getWord(wordId);
  }

  render() {
    const { wordId } = this.props.match.params;
    const { word } = this.state;
    const user = firebase.auth().currentUser;
    return (
      <div className='OneWord container'>
        <h2>{word.word}</h2>
        <p>{word.kind}</p>
        <p>Forebear: {word.forebear} ({word.whence}{ word.isCrafted ? ' 🔨' : ''})</p>
        { word.forebearExample !== '' && <p>{word.forebearExample}</p>}
        <p>Meaning: {word.meaning}</p>
        { word.notes !== '' && <p>Notes: {word.notes}</p>}
        { user ? <Link className='btn' to={`/words/${wordId}/adight`}>adight</Link> : <div>you logged out</div> }
      </div>
    );
  }
}

export default OneWord;

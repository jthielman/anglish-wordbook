import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import wordData from '../../../helpers/data/wordData';

import './OneWord.scss';

class OneWord extends React.Component {
  state = {
    word: {},
  }

  static propTypes = {
    adweshWord: PropTypes.func,
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

  deleteWordClick = (e) => {
    e.preventDefault();
    const { adweshWord } = this.props;
    const { wordId } = this.props.match.params;
    adweshWord(wordId)
      .then(() => {
        this.props.history.push('/words');
      });
  }

  render() {
    const { wordId } = this.props.match.params;
    const { word } = this.state;
    const user = firebase.auth().currentUser;
    return (
      <div className='OneWord container'>
        <h2>{word.word}</h2>
        <p>{word.kind}</p>
        <p>Forebear: {word.forebear} ({word.whence}{ word.isCrafted && ' 🔨' })</p>
        { word.forebearExample !== '' && <p>{word.forebearExample}</p> }
        <p>Meaning: {word.meaning}</p>
        { word.notes !== '' && <p>Notes: {word.notes}</p> }
        { user.uid === word.uid && <Link className='btn btn-outline-dark' to={`/words/${wordId}/adight`}>Adight</Link> }
        { user.uid === word.uid && <button className='btn btn-outline-danger' onClick={this.deleteWordClick}>Adwesh</button> }
      </div>
    );
  }
}

export default OneWord;

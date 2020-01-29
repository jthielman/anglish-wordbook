import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import firebase from 'firebase/app';
// import 'firebase/auth';

import wordShape from '../../../helpers/propz/wordShape';

import './HitWord.scss';

class HitWord extends React.Component {
  static propTypes = {
    word: wordShape.wordShape,
    adweshWord: PropTypes.func,
    getWords: PropTypes.func,
  }

  deleteWordClick = (e) => {
    e.preventDefault();
    const { adweshWord, word } = this.props;
    adweshWord(word.id)
      .then(() => this.props.getWords());
  }

  showAdightButton = (word, user) => {
    if (word.uid === user.uid) {
      return <Link className='btn btn-outline-secondary btn-sm' to={`/words/${word.id}/adight`}>Adight</Link>;
    }
    return '';
  }

  showAdweshButton = (word, user) => {
    if (word.uid === user.uid) {
      return <button className='btn btn-outline-danger btn-sm' onClick={this.deleteWordClick}>Adwesh</button>;
    }
    return '';
  }

  render() {
    const { word, user } = this.props;

    return (
      <div className='HitWord container'>
        <div className='card border-light mb-3'>
          <div className='card-body'>
            <div className='d-flex justify-content-between'>
              <h5 className='card-title'><Link to={`/words/${word.id}`}>{word.word}</Link></h5>
              <span>{user && this.showAdightButton(word, user)}</span>
            </div>
            <div className='d-flex justify-content-between'>
              <h6 className='card-subtitle mb-2 text-muted'>{word.kind}</h6>
              <span>{user && this.showAdweshButton(word, user)}</span>
            </div>
            <p className='card-text'>{word.meaning}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HitWord;

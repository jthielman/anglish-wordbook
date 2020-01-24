import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import wordShape from '../../../helpers/propz/wordShape';

import './HitWord.scss';

class HitWord extends React.Component {
  static propTypes = {
    word: wordShape.wordShape,
  }

  render() {
    const { word } = this.props;

    return (
      <div className='HitWord container'>
        <div className='card border-light mb-3'>
          <div className='card-body'>
            <h5 className='card-title'><Link to={`/words/${word.id}`}>{word.word}</Link></h5>
            <h6 className='card-subtitle mb-2 text-muted'>{word.kind}</h6>
            <p className='card-text'>{word.meaning}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HitWord;

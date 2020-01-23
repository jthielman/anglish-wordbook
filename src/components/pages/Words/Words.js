import React from 'react';
import { Link } from 'react-router-dom';

import './Words.scss';

class Words extends React.Component {
  render() {
    const wordId = '12345';
    return (
      <div className='Words'>
        <h1>Words</h1>
        <Link className='btn' to={`/words/${wordId}/adight`}>adight</Link>
        <Link className='btn' to={`/words/${wordId}`}>one word</Link>
      </div>
    );
  }
}

export default Words;

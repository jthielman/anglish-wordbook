import React from 'react';
import { Link } from 'react-router-dom';

import './OneWord.scss';

class OneWord extends React.Component {
  render() {
    const wordId = '12345';
    return (
      <div>
        <h1>One Word</h1>
        <Link className='btn' to={`/words/${wordId}/adight`}>edit</Link>
      </div>
    );
  }
}

export default OneWord;

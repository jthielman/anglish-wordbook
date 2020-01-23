import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import './Words.scss';

class Words extends React.Component {
  render() {
    const wordId = '12345';
    const user = firebase.auth().currentUser;
    return (
      <div className='Words'>
        <h1>Words</h1>
        { user ? <Link className='btn' to={`/words/${wordId}/adight`}>adight</Link> : <div>you logged out</div> }
        <Link className='btn' to={`/words/${wordId}`}>one word</Link>
      </div>
    );
  }
}

export default Words;

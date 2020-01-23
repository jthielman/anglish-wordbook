import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

// import authData from '../../../helpers/data/authData';

import './OneWord.scss';

class OneWord extends React.Component {
  render() {
    const wordId = '12345';
    const user = firebase.auth().currentUser;
    return (
      <div>
        <h1>One Word</h1>
        { user ? <Link className='btn' to={`/words/${wordId}/adight`}>adight</Link> : <div>you logged out</div> }
      </div>
    );
  }
}

export default OneWord;

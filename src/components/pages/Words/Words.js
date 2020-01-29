import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../../helpers/data/authData';
import wordData from '../../../helpers/data/wordData';

import HitWord from '../../shared/HitWord/HitWord';

import './Words.scss';

class Words extends React.Component {
  state = {
    words: [],
    adweshWord: PropTypes.func,
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
    const user = authData.getUser();
    return (
      <div className='Words'>
        <h1>Words</h1>
        <div>
          { this.state.words.map((word) => <HitWord key={word.id} word={word} user={user} adweshWord={this.props.adweshWord} getWords={this.getWords}>{word.word}</HitWord>) }
        </div>
      </div>
    );
  }
}

export default Words;

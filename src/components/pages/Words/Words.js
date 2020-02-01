import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../../helpers/data/authData';
import wordData from '../../../helpers/data/wordData';

import HitWord from '../../shared/HitWord/HitWord';

import './Words.scss';

class Words extends React.Component {
  static propTypes = {
    adweshWord: PropTypes.func,
  }

  state = {
    words: [],
    startWord: 'a',
    nextStartWord: '',
  }

  getWords = () => {
    wordData.getNextWords(this.state.startWord)
      .then((words) => {
        this.setState({ nextStartWord: words.pop().word, words });
      })
      .catch((err) => console.error('error in getWords', err));
  }

  componentDidMount() {
    this.getWords();
  }

  getLastTen = (e) => {
    e.preventDefault();
    const currentStartWord = this.state.words[0].word;
    this.setState({ nextStartWord: currentStartWord });
    wordData.getFormerWords(currentStartWord)
      .then((words) => {
        this.setState({ nextStartWord: words.pop().word, words });
      })
      .catch((err) => console.error('error in getLastTen', err));
  }

  getNextTen = (e) => {
    e.preventDefault();
    wordData.getNextWords(this.state.nextStartWord)
      .then((words) => {
        this.setState({ nextStartWord: words.pop().word, words });
      })
      .catch((err) => console.error('error in getNextTen', err));
  }

  render() {
    const user = authData.getUser();
    return (
      <div className='Words container'>
        <h1>Words</h1>
        <div className='row'>
        <div><button className='btn btn-outline-secondary' onClick={this.getLastTen}>Former</button></div>
        <div>
          { this.state.words.map((word) => <HitWord key={word.id} word={word} user={user} adweshWord={this.props.adweshWord} getWords={this.getWords}>{word.word}</HitWord>) }
        </div>
        <div><button className='btn btn-outline-secondary' onClick={this.getNextTen}>After</button></div>
        </div>
      </div>
    );
  }
}

export default Words;

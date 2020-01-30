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
    former: 'a',
    after: '',
  }

  getWords = () => {
    wordData.getTenWords(this.state.former)
      .then((words) => this.setState({ words }))
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getWords();
  }

  getLastTen = (e) => {
    e.preventDefault();
    this.setState({ after: this.state.words[0] });
    wordData.getTenWords(this.state.former)
      .then((words) => {
        this.setState({ words, former: words[0] });
      })
      .catch((err) => console.error('error in getLastTen', err));
  }

  getNextTen = (e) => {
    e.preventDefault();
    this.setState({ former: this.state.words[0] });
    wordData.getTenWords(this.state.after)
      .then((words) => {
        this.setState({ words, after: words[9] });
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

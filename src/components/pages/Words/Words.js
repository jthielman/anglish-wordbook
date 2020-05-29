import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../../helpers/data/authData';
import wordData from '../../../helpers/data/wordData';

import HitWord from '../../shared/HitWord/HitWord';
import Seek from '../../shared/Seek/Seek';

import './Words.scss';

class Words extends React.Component {
  static propTypes = {
    adweshWord: PropTypes.func,
    getAllWords: PropTypes.func,
    siftWords: PropTypes.func,
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
    /* const { siftedWords } = this.props;
    if (siftedWords === undefined) { */
    this.getWords();
    /* } else {
      this.setState({ words: siftedWords });
    } */
  }

  componentDidUpdate(prevProps) {
    if (prevProps.siftedWords !== this.props.siftedWords) {
      this.setState({ words: this.props.siftedWords });
    }
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
        <div className='mb-4'>
          <Seek getAllWords={this.props.getAllWords} siftWords={this.props.siftWords} />
        </div>
        <div className='row flex-nowrap justify-content-between'>
          <div><button className='btn btn-outline-secondary' onClick={this.getLastTen}>Former</button></div>
          <div className='dictionary-container d-flex flex-column flex-wrap'>
            { this.state.words.map((word) => <HitWord key={word.id} word={word} user={user} adweshWord={this.props.adweshWord} getWords={this.getWords}>{word.word}</HitWord>) }
          </div>
          <div><button className='btn btn-outline-secondary' onClick={this.getNextTen}>After</button></div>
        </div>
      </div>
    );
  }
}

export default Words;

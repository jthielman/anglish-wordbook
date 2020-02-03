import React from 'react';

import './Seek.scss';
import wordData from '../../../helpers/data/wordData';

class Seek extends React.Component {
  state = {
    words: [],
  }

  getWords = () => {
    wordData.getWords()
      .then((words) => this.setState({ words }))
      .catch((err) => console.error('error in getting all words', err));
  }

  seekWords = (e) => {
    e.preventDefault();
    // wordData.getWords();
  }

  render() {
    return (
      <div className='Seek dropdown show'>
        <button onClick={this.getWords} className='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>
          Seek
        </button>
        <div className='dropdown-menu show' aria-labelledby='dropdownMenuButton' x-placement='bottom-start'>
          <form role='search' className='px-3 py-2'>
            <div className='form-group'>
              <input type='search' className='form-control' id='seekWordInput' placeholder="Seek a word..." aria-label="Sift through words" />
            </div>
            <button type='submit' className='btn btn-outline-info'>Seek!</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Seek;

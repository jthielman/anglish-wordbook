import React from 'react';
import PropTypes from 'prop-types';

import './Seek.scss';

class Seek extends React.Component {
  state = {
    searchTerm: '',
  }

  static propTypes = {
    getAllWords: PropTypes.func,
    siftWords: PropTypes.func,
  }

  openSeekInput = (e) => {
    e.preventDefault();
    this.props.getAllWords();
  }

  seekWords = (e) => {
    e.preventDefault();
    this.props.siftWords(this.state.searchTerm);
    document.getElementById('seekWordInput').value = '';
  }

  seekChange = (e) => {
    e.preventDefault();
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    return (
      <form role='search' className='px-3 py-2'>
        <div className='input-group mb-3'>
          <input onClick={this.openSeekInput} onChange={this.seekChange} type='search' className='form-control' id='seekWordInput' placeholder="Seek a word..." aria-label="Sift through words" />
          <div className='input-group-append'>
            <button onClick={this.seekWords} type='submit' className='btn btn-outline-info'>Seek!</button>
          </div>
        </div>
      </form>
    );
  }
}

export default Seek;

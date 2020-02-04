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
    // write code here to show the dropdown
    this.props.getAllWords();
  }

  seekWords = (e) => {
    e.preventDefault();
    this.props.siftWords(this.state.searchTerm);
    // this.props.history.push('/words');
  }

  seekChange = (e) => {
    e.preventDefault();
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    return (
      <div className='Seek dropdown show'>
        <button onClick={this.openSeekInput} className='btn btn-outline-dark dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>
          Seek
        </button>
        <div className='dropdown-menu show' aria-labelledby='dropdownMenuButton' x-placement='bottom-start'>
          <form role='search' className='px-3 py-2'>
            <div className='form-group'>
              <input onChange={this.seekChange} type='search' className='form-control' id='seekWordInput' placeholder="Seek a word..." aria-label="Sift through words" />
            </div>
            <button onClick={this.seekWords} type='submit' className='btn btn-outline-info'>Seek!</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Seek;

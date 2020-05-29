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
    // document.getElementById('seek-menu').classList.toggle('show');
    this.props.getAllWords();
  }

  seekWords = (e) => {
    e.preventDefault();
    this.props.siftWords(this.state.searchTerm);
    document.getElementById('seekWordInput').value = '';
    // document.getElementById('seek-menu').classList.toggle('show');
  }

  seekChange = (e) => {
    e.preventDefault();
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    return (
      <div>
      {/* <div className='Seek dropdown show'>
        <button onClick={this.openSeekInput} className='btn btn-outline-light' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>
          Seek
        </button>
        <div id='seek-menu' className='dropdown-menu' aria-labelledby='dropdownMenuButton' x-placement='bottom-start'>
          <form role='search' className='px-3 py-2'>
            <div className='form-group'>
              <input onChange={this.seekChange} type='search' className='form-control' id='seekWordInput' placeholder="Seek a word..." aria-label="Sift through words" />
            </div>
            <button onClick={this.seekWords} type='submit' className='btn btn-outline-info'>Seek!</button>
          </form>
        </div>
      </div> */}
        <form role='search' className='px-3 py-2'>
          <div className='form-row'>
            <div className='form-group col-md-6'>
              <input onClick={this.openSeekInput} onChange={this.seekChange} type='search' className='form-control' id='seekWordInput' placeholder="Seek a word..." aria-label="Sift through words" />
            </div>
            <button onClick={this.seekWords} type='submit' className='btn btn-outline-info'>Seek!</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Seek;

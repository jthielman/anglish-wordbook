import React from 'react';

import './WordForm.scss';

class WordForm extends React.Component {
  render() {
    return (
      <div className='WordForm'>
        { this.props.path === '/words/new' ? <h1>New Word</h1> : <h1>Adight Word</h1> }
      </div>
    );
  }
}

export default WordForm;

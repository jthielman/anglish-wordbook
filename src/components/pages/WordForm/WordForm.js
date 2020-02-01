import React from 'react';

import './WordForm.scss';

import authData from '../../../helpers/data/authData';
import wordData from '../../../helpers/data/wordData';

class WordForm extends React.Component {
  state = {
    word: '',
    meaning: '',
    kind: '',
    forebear: '',
    forebearExample: '',
    whence: '',
    isCrafted: false,
    notes: '',
  }

  componentDidMount() {
    const { wordId } = this.props.match.params;
    if (wordId) {
      wordData.getOneWord(wordId)
        .then((response) => {
          this.setState({
            word: response.data.word,
            meaning: response.data.meaning,
            kind: response.data.kind,
            forebear: response.data.forebear,
            forebearExample: response.data.forebearExample,
            whence: response.data.whence,
            isCrafted: response.data.isCrafted,
            notes: response.data.notes,
          });
        })
        .catch((err) => console.error('error from get one word', err));
    }
  }

  wordChange = (e) => {
    e.preventDefault();
    this.setState({ word: e.target.value });
  }

  meaningChange = (e) => {
    e.preventDefault();
    this.setState({ meaning: e.target.value });
  }

  kindChange = (e) => {
    e.preventDefault();
    this.setState({ kind: e.target.value });
  }

  forebearChange = (e) => {
    e.preventDefault();
    this.setState({ forebear: e.target.value });
  }

  forebearExampleChange = (e) => {
    e.preventDefault();
    this.setState({ forebearExample: e.target.value });
  }

  whenceChange = (e) => {
    e.preventDefault();
    this.setState({ whence: e.target.value });
  }

  isCraftedChange = (e) => {
    if (e.target.checked) {
      this.setState({ isCrafted: true });
    } else {
      this.setState({ isCrafted: false });
    }
  }

  notesChange = (e) => {
    e.preventDefault();
    this.setState({ notes: e.target.value });
  }

  adightWordClick = (e) => {
    e.preventDefault();
    const { wordId } = this.props.match.params;
    const adightWord = {
      word: this.state.word,
      meaning: this.state.meaning,
      kind: this.state.kind,
      forebear: this.state.forebear,
      forebearExample: this.state.forebearExample,
      whence: this.state.whence,
      isCrafted: this.state.isCrafted,
      notes: this.state.notes,
      uid: authData.getUid(),
    };
    wordData.updateWord(wordId, adightWord)
      .then(() => this.props.history.push(`/words/${this.props.match.params.wordId}`))
      .catch((err) => console.error('error from edit word', err));
  }

  stowWordClick = (e) => {
    e.preventDefault();
    const newWord = {
      word: this.state.word,
      meaning: this.state.meaning,
      kind: this.state.kind,
      forebear: this.state.forebear,
      forebearExample: this.state.forebearExample,
      whence: this.state.whence,
      isCrafted: this.state.isCrafted,
      notes: this.state.notes,
      uid: authData.getUid(),
    };
    wordData.stowWord(newWord)
      .then((response) => this.props.history.push(`/words/${response.data.name}`))
      .catch((err) => console.error('error from stow word', err));
  }

  render() {
    const {
      word,
      meaning,
      kind,
      forebear,
      forebearExample,
      whence,
      isCrafted,
      notes,
    } = this.state;
    const { wordId } = this.props.match.params;
    return (
      <div className='WordForm container'>
        {this.props.path === '/words/new' ? (
          <h1>New Word</h1>
        ) : (
          <h1>Adight Word</h1>
        )}
        <form>
          <div className='form-row'>
            <div className='form-group  col-md-4 text-left'>
              <label htmlFor='inputWord' className=' col-form-label'>
                Word:
              </label>
              <div>
                <input type='text' className='form-control' id='inputWord' value={word} onChange={this.wordChange} />
              </div>
            </div>
            <div className='form-group  col-md-4 text-left'>
              <label htmlFor='inputKind' className='col-form-label'>
                Kind:
              </label>
              <div>
                <select className='form-control' id='inputKind' value={kind} onChange={this.kindChange}>
                  <option></option>
                  <option>Noun</option>
                  <option>Verb</option>
                  <option>Adj</option>
                  <option>Adv</option>
                  <option>Prep</option>
                  <option>Propnoun</option>
                  <option>Conj</option>
                  <option>Int</option>
                  <option>Affix</option>
                </select>
              </div>
            </div>
            <div className='form-group col-md-4 align-self-end pb-2'>
              <div className='text-sm-left text-md-center form-checkbox'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='isCraftedCheckbox'
                  checked={isCrafted}
                  onChange={this.isCraftedChange}
                />
                <label className='form-check-label' htmlFor='isCraftedCheckbox'>
                  Crafted for Anglish?
                </label>
              </div>
            </div>
          </div>
          <div className='form-row'>
            <div className='form-group text-left col-md-6'>
              <label
                htmlFor='inputForebear'
                className='col-form-label'
              >
                Forebear:
              </label>
              <div>
                <input
                  type='text'
                  className='form-control'
                  id='inputForebear'
                  value={forebear}
                  onChange={this.forebearChange}
                />
              </div>
            </div>
            <div className='form-group text-left col-md-6'>
              <label htmlFor='inputWhence' className='col-form-label'>
                Whence:
              </label>
              <div>
                <select
                  className='form-control'
                  id='inputWhence'
                  value={whence}
                  onChange={this.whenceChange}
                >
                  <option></option>
                  <option value='NE'>New English (Modern English)</option>
                  <option value='ME'>Middle English</option>
                  <option value='OE'>Old English</option>
                  <option value='WF'>West Frisian</option>
                  <option value='LG'>Low German</option>
                  <option value='HG'>High German</option>
                  <option value='DF'>Dutch & Frankish</option>
                  <option value='N'>Norse</option>
                  <option value='C'>Celtic</option>
                  <option value='I'>Italic</option>
                  <option value='H'>Hellenic</option>
                  <option value='Þ'>Orþeech (Proto-Germanic‍)</option>
                  <option value='O'>other (Slavic, Algic, and so on)</option>
                </select>
              </div>
            </div>
          </div>
          <div className='form-row'>
            <div className='form-group text-left col-md-12'>
              <label htmlFor='inputForebearByspel'>
                Forebear byspel:
              </label>
              <div>
                <textarea
                  id='inputForebearByspel'
                  className='form-control'
                  rows='3'
                  value={forebearExample}
                  onChange={this.forebearExampleChange}
                ></textarea>
              </div>
            </div>
          </div>
          <div className='form-row'>
            <div className='form-group text-left col-md-12'>
              <label htmlFor='inputMeaning'>
                Meaning:
              </label>
              <div>
                <textarea
                  id='inputMeaning'
                  className='form-control'
                  rows='3'
                  value={meaning}
                  onChange={this.meaningChange}
                ></textarea>
              </div>
            </div>
          </div>
          <div className='form-row'>
            <div className='form-group text-left col-md-12'>
              <label htmlFor='inputNotes'>
                Notes:
              </label>
              <div>
                <textarea
                  id='inputNotes'
                  className='form-control'
                  rows='3'
                  value={notes}
                  onChange={this.notesChange}
                ></textarea>
              </div>
            </div>
          </div>
          {wordId
            ? <button type='submit' className='btn btn-outline-secondary' onClick={this.adightWordClick}>Adight word</button>
            : <button type='submit' className='btn btn-outline-dark' onClick={this.stowWordClick}>Eke to wordhoard</button>
          }
        </form>
      </div>
    );
  }
}

export default WordForm;

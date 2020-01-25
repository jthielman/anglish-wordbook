import React from 'react';

import './WordForm.scss';

class WordForm extends React.Component {
  render() {
    return (
      <div className='WordForm container'>
        { this.props.path === '/words/new' ? <h1>New Word</h1> : <h1>Adight Word</h1> }
        <form>
          <div className='form-row'>
            <div className='form-group row col-md-5'>
              <label htmlFor='inputWord' className='col-sm-3 col-form-label'>Word:</label>
              <div className='col-sm-9'>
                <input type='text' className='form-control' id='inputWord' />
              </div>
            </div>
            <div className='form-group col-md-4'>
              <input className='form-check-input' type='checkbox' id='isCraftedCheckbox' />
              <label className='form-check-label' htmlFor='isCraftedCheckbox'>
                Crafted for Anglish?
              </label>
            </div>
            <div className='form-group row'>
              <label htmlFor='inputKind' className='col-sm-3 col-form-label'>Kind:</label>
              <div className='col-sm-9'>
                <select className='form-control' id='inputKind' defaultValue=''>
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
          </div>
          <div className='form-row'>
            <div className='form-group row col-md-6'>
              <label htmlFor='inputForebear' className='col-sm-4 col-form-label'>Forebear:</label>
              <div className='col-sm-8'>
                <input type='text' className='form-control' id='inputForebear' />
              </div>
            </div>
            <div className='form-group row col-md-6'>
              <label htmlFor='inputWhence' className='col-sm-3 col-form-label'>Whence:</label>
              <div className='col-sm-9'>
                <select className='form-control' id='inputWhence' defaultValue=''>
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
            <div className='form-group col-md-6'>
              <label htmlFor='inputCity'>City</label>
              <input type='text' className='form-control' id='inputCity' />
            </div>
            <div className='form-group col-md-4'>
              <label htmlFor='inputState'>State</label>
              <select id='inputState' className='form-control' defaultValue='Choose...'>
                <option>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className='form-group col-md-2'>
              <label htmlFor='inputZip'>Zip</label>
              <input type='text' className='form-control' id='inputZip' />
            </div>
          </div>
          <div className='form-group'>
            <div className='form-check'>
              <input className='form-check-input' type='checkbox' id='gridCheck' />
              <label className='form-check-label' htmlFor='gridCheck'>
                Check me out
              </label>
            </div>
          </div>
          <button type='submit' className='btn btn-primary'>Sign in</button>
        </form>
      </div>
    );
  }
}

export default WordForm;

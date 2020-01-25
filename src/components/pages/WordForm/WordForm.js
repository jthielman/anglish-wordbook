import React from "react";

import "./WordForm.scss";

class WordForm extends React.Component {
  render() {
    return (
      <div className="WordForm container">
        {this.props.path === "/words/new" ? (
          <h1>New Word</h1>
        ) : (
          <h1>Adight Word</h1>
        )}
        <form>
          <div className="form-row">
            <div className="form-group  col-md-4 text-left">
              <label htmlFor="inputWord" className=" col-form-label">
                Word:
              </label>
              <div className="">
                <input type="text" className="form-control" id="inputWord" />
              </div>
            </div>
            <div className="form-group  col-md-4 text-left">
              <label htmlFor="inputKind" className=" col-form-label">
                Kind:
              </label>
              <div className="">
                <select className="form-control" id="inputKind" defaultValue="">
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
            <div className="form-group col-md-4 align-self-end pb-2">
              <div className='text-sm-left text-md-center pl-4'>
                <input
                  className="form-check-input  "
                  type="checkbox"
                  id="isCraftedCheckbox"
                />
                <label className="form-check-label" htmlFor="isCraftedCheckbox">
                  Crafted for Anglish?
                </label>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group text-left col-md-6">
              <label
                htmlFor="inputForebear"
                className=" col-form-label"
              >
                Forebear:
              </label>
              <div className="">
                <input
                  type="text"
                  className="form-control"
                  id="inputForebear"
                />
              </div>
            </div>
            <div className="form-group text-left col-md-6">
              <label htmlFor="inputWhence" className=" col-form-label">
                Whence:
              </label>
              <div className="">
                <select
                  className="form-control"
                  id="inputWhence"
                  defaultValue=""
                >
                  <option></option>
                  <option value="NE">New English (Modern English)</option>
                  <option value="ME">Middle English</option>
                  <option value="OE">Old English</option>
                  <option value="WF">West Frisian</option>
                  <option value="LG">Low German</option>
                  <option value="HG">High German</option>
                  <option value="DF">Dutch & Frankish</option>
                  <option value="N">Norse</option>
                  <option value="C">Celtic</option>
                  <option value="I">Italic</option>
                  <option value="H">Hellenic</option>
                  <option value="Þ">Orþeech (Proto-Germanic‍)</option>
                  <option value="O">other (Slavic, Algic, and so on)</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group text-left col-md-12">
              <label className="" htmlFor="inputForebearByspel">
                Forebear byspel:
              </label>
              <div className="">
                <textarea
                  id="inputForebearByspel"
                  className="form-control"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group text-left col-md-12">
              <label className="" htmlFor="inputMeaning">
                Meaning:
              </label>
              <div className="">
                <textarea
                  id="inputMeaning"
                  className="form-control"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group text-left col-md-12">
              <label className="" htmlFor="inputNotes">
                Notes:
              </label>
              <div className="">
                <textarea
                  id="inputNotes"
                  className="form-control"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-outline-dark">
            Eke to wordhoard
          </button>
        </form>
      </div>
    );
  }
}

export default WordForm;

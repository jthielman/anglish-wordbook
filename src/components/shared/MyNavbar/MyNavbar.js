import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

// import wordData from '../../../helpers/data/wordData';
import Seek from '../Seek/Seek';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    const buildNavbar = () => {
      if (authed) {
        return (
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/words'>Words</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/words/new'>New</Link>
            </li>
            <li className='nav-item'>
              <button className='nav-link btn btn-outline-dark' onClick={this.logMeOut}>Log out</button>
            </li>
          </ul>
        );
      }
      return (
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to='/'>Home</Link>
          </li>
          <li>
            <Link className='nav-link' to='/words'>Words</Link>
          </li>
          <li>
            <button className='nav-link btn btn-light' onClick={this.loginClickEvent}>Log in with Google</button>
          </li>
        </ul>
      );
    };
    return (
      <div className="MyNavbar">
        <nav className="navbar navbar-expand navbar-light">
          <Link className="nav-brand" to="/">Anglish Wordbook</Link>
          <Seek />
          { buildNavbar() }
        </nav>
      </div>
    );
  }
}

export default MyNavbar;

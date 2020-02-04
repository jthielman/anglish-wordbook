import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import firebaseConnection from '../helpers/data/connection';
import MyNavbar from '../components/shared/MyNavbar/MyNavbar';
import Home from '../components/pages/Home/Home';
import Words from '../components/pages/Words/Words';
import WordForm from '../components/pages/WordForm/WordForm';
import OneWord from '../components/pages/OneWord/OneWord';

import wordData from '../helpers/data/wordData';

import './App.scss';

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/words', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
    allWords: [],
    siftedWords: [],
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  adweshWord = (wordId) => new Promise((resolve, reject) => {
    wordData.deleteWord(wordId)
      .then((results) => {
        resolve(results);
      })
      .catch((err) => console.error('error deleting word', err));
  });

  getAllWords = () => {
    wordData.getWords()
      .then((allWords) => this.setState({ allWords }))
      .catch((err) => console.error('error from getAllWords', err));
  }

  siftWords = (searchTerm) => {
    const wordsArr = this.state.allWords;
    const searchResults = [];
    searchTerm.toLowerCase();
    wordsArr.forEach((word) => {
      // compare ${value} to the ${planet.name} and ${planet.description} strings:
      if (word.word.toLowerCase().includes(searchTerm) || word.meaning.toLowerCase().includes(searchTerm)) {
        // and then put the matching objects into their own array:
        searchResults.push(word);
      }
    });
    // and then print that new array to the DOM:
    this.setState({ searchResults });
  };

  render() {
    const { authed } = this.state;
    return (
      <div className='App'>
        <Router>
          <MyNavbar authed={authed} getAllWords={this.getAllWords} siftWords={this.siftWords} />
          <Switch>
            <Route path='/' exact component={Home} authed={authed} />
            <Route path='/words' exact render={(routeProps) => (<Words {...routeProps} authed={authed} adweshWord={this.adweshWord} siftedWords={this.state.searchResults} />)} />
            <PrivateRoute path='/words/new' exact component={WordForm} authed={authed} />
            <PrivateRoute path='/words/:wordId/adight' exact component={WordForm} authed={authed} />
            <Route path='/words/:wordId' exact render={(routeProps) => (<OneWord {...routeProps} authed={authed} adweshWord={this.adweshWord} />)} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

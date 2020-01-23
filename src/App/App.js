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

import './App.scss';
import OneWord from '../components/pages/OneWord/OneWord';

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/words', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
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

  render() {
    const { authed } = this.state;
    return (
      <div className='App'>
        <Router>
          <MyNavbar authed={authed} />
          <Switch>
            <Route path='/' exact component={Home} authed={authed} />
            <Route path='/words' exact component={Words} authed={authed} />
            <PrivateRoute path='/words/new' exact component={WordForm} authed={authed} />
            <PrivateRoute path='/words/:wordId/adight' exact component={WordForm} authed={authed} />
            <Route path='/words/:wordId' exact component={OneWord} authed={authed} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

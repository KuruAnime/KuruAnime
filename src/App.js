import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import firebase from "firebase";
import 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyCz3laxK1vMpEpjJFXSx8UyzlH7mE4KBT0",
  authDomain: "kuru-anime-network.firebaseapp.com",
  databaseURL: "https://kuru-anime-network.firebaseio.com",
  projectId: "kuru-anime-network",
  storageBucket: "kuru-anime-network.appspot.com",
  messagingSenderId: "195377790597"
};

firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

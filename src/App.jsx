import React, { Component } from 'react';
import Header from './components/Header';
import UserAuthentication from './pages/UserAuthentication';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <UserAuthentication />
      </div>
    );
  }
}

export default App;

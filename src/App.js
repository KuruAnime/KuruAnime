import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Kuru Anime is Under Maintenance</title>
        </Helmet>
        <h1 style={{ textAlign: "center" }}>Under Maintenance</h1>
      </div>
    );
  }
}

export default App;

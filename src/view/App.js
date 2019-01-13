import React, { Component } from 'react'
import {Helmet} from 'react-helmet'
import Header from './layout/Header'
import Footer from './layout/Footer'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Kuru Anime</title>
        </Helmet>
        <Header>Header</Header>
        <p>Under Maintenance</p>
        <Footer>Footer</Footer>
      </div>
    )
  }
}

export default App

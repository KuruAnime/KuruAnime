import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import firebase from "firebase"

import Header from './layout/Header'
import Footer from './layout/Footer'
import Index from './pages/Index'
import About from './pages/About'
import './App.css'

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
  constructor(props) {
    super(props)
    this.state = {
      siteName: null,
      siteDescription: null
    }
  }

  componentDidMount() {
    firebase.database().ref('env').on('value', snap => {
      this.setState({
        siteName: snap.child('site_name').val(),
        siteDescription: snap.child('site_description').val()
      })
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header siteName={this.state.siteName} siteDescription={this.state.siteDescription}>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/about/">About</Link>
            </nav>
          </Header>
          <div>
            <Route path="/" exact render={() => <Index siteName={this.state.siteName} siteDescription={this.state.siteDescription} />} />
            <Route path="/about/" render={() => <About siteName={this.state.siteName} />} />
          </div>
          <Footer>Footer</Footer>
        </div>
      </Router>
    )
  }
}

export default App

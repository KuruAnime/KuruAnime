import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
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
// firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/about/">About</Link>
            </nav>
          </Header>
          <div>
            <Route path="/" exact render={() => <Index />} />
            <Route path="/about/" render={() => <About />} />
          </div>
          <Footer>Footer</Footer>
        </div>
      </Router>
    )
  }
}

export default App

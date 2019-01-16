import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Header from './layout/Header'
import Footer from './layout/Footer'
import Index from './pages/Index'
import About from './pages/About'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header>Header</Header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about/">About</Link>
          </nav>
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

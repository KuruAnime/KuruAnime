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
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
          <div>
            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
          </div>
          <Footer>Footer</Footer>
        </div>
      </Router>
    )
  }
}

export default App

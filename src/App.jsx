import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  emailOnChange = (event) => {
    this.setState({
      email: event.target.value
    });
  }
  passwordOnChange = (event) => {
    this.setState({
      password: event.target.value
    });
  }
  submitRegistration = (event) => {
    console.log("Email: ", this.state.email);
    console.log("Password: ", this.state.password);
    event.preventDefault();
  }
  render() {
    const { submitRegistration, emailOnChange, passwordOnChange } = this;
    const inputStyle = "border block w-full mb-2 p-3 rounded bg-grey-lighter";
    return (
      <div>
        <Header />
        <div className="container mx-auto py-4">
          <h3 className="pb-2">Registration</h3>
          <form onSubmit={submitRegistration}>
            <input className={inputStyle} type="text" placeholder="E-mail" onChange={emailOnChange} />
            <input className={inputStyle} type="password" placeholder="Password" onChange={passwordOnChange} />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;

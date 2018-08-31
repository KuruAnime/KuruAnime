import React, { Component } from 'react';

class UserAuthentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      pageStatus: "Login"
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
  registerCheckbox = (event) => {
    if(event.target.checked) {
      this.setState({
        pageStatus: "Register"
      });
    }else{
      this.setState({
        pageStatus: "Login"
      });
    }
  }
  render() {
    const { submitRegistration, emailOnChange, passwordOnChange, registerCheckbox } = this;
    const { pageStatus } = this.state;
    const inputStyle = "border block w-full mb-2 p-3 rounded bg-grey-lighter";
    const buttonStyle = "rounded block w-full p-3 bg-black text-white";
    return (
      <div>
        <div className="container mx-auto py-4">
          <h3 className="pb-2">{pageStatus}</h3>
          <form onSubmit={submitRegistration}>
            <input className={inputStyle} type="text" placeholder="E-mail" onChange={emailOnChange} />
            <input className={inputStyle} type="password" placeholder="Password" onChange={passwordOnChange} />
            <label className="mb-2 block text-right" ><input onChange={registerCheckbox} type="checkbox" name="register" id="registerCheckbox"/> Register</label>
            <button className={buttonStyle} type="submit">{pageStatus}</button>
          </form>
        </div>
      </div>
    );
  }
}

export default UserAuthentication;
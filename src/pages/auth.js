import React, { Component } from 'react';

import firebase from "firebase/app";
import 'firebase/auth';
import { firebaseConfig } from "../firebase-config";

firebase.initializeApp(firebaseConfig);

class AuthPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            passwordCheck: "",
            registerStatus: false
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
    passwordCheckOnChange = (event) => {
        this.setState({
            passwordCheck: event.target.value
        });
    }
    submitRegistration = (event) => {
        const { email, password, passwordCheck, registerStatus } = this.state;
        if (registerStatus) {
            if (password === passwordCheck) {
                firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                });
            } else {
                console.log("Password does not match!");
            }
        } else {
            firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
        }
        event.preventDefault();
    }
    registerCheckbox = (event) => {
        if (event.target.checked) {
            this.setState({
                registerStatus: true
            });
        } else {
            this.setState({
                registerStatus: false
            });
        }
    }
    render() {
        const { submitRegistration, emailOnChange, passwordOnChange, registerCheckbox, passwordCheckOnChange } = this;
        const { registerStatus } = this.state;
        const inputStyle = "border block w-full mb-2 p-3 rounded bg-grey-lighter";
        const buttonStyle = "rounded block w-full p-3 bg-black text-white";
        return (
            <div>
                <div className="container mx-auto py-4">
                    <h3 className="pb-2">{registerStatus ? "Register" : "Login"}</h3>
                    <form onSubmit={submitRegistration}>
                        <input className={inputStyle} type="text" placeholder="E-mail" onChange={emailOnChange} />
                        <input className={inputStyle} type="password" placeholder="Password" onChange={passwordOnChange} />
                        {registerStatus && <input className={inputStyle} type="password" placeholder="Password Again" onChange={passwordCheckOnChange} />}
                        <label className="mb-2 block text-right" ><input onChange={registerCheckbox} type="checkbox" name="register" id="registerCheckbox" /> Register</label>
                        <button className={buttonStyle} type="submit">{registerStatus ? "Register" : "Login"}</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AuthPage;
import React, { Component } from 'react';
import style from './styles/user.style.js';

class User extends Component {
    render() {
        return (
            <div className="ml-auto">
                <a className={style.logIn} href="#LogIn">
                    <i className="fas fa-sign-in-alt"></i>
                    <span className="ml-2">Log In</span>
                </a>
                <a className={style.signUp} href="#SignUp">
                    <i className="fas fa-user-plus"></i>
                    <span className="ml-2">Sign Up</span>
                </a>
            </div>
        );
    }
}

export default User;
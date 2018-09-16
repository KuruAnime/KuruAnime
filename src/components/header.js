import React, { Component } from 'react';
import style from './styles/footer.style.js';

class Header extends Component {
    render() {
        return (
            <header className={style.header}>
                <div className={style.container}>
                    <a href="#Home" className={style.logo}>Kuru Anime</a>
                    <ul className={style.menu}>
                        <li className="mr-4">
                            <a className={style.menuItems} href="#Home">Home</a>
                        </li>
                        <li className="mr-4">
                            <a className={style.menuItems} href="#About">About</a>
                        </li>
                        <li>
                            <a className={style.menuItems} href="https://blog.kuru-anime.com/" target="_blank" rel="noopener noreferrer">Blog</a>
                        </li>
                    </ul>
                    <div className={style.search}>
                        <input className={style.searchField} placeholder="Search..." />
                        <button className={style.searchButton}>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                    <ul className={style.social}>
                        <li className="mr-4">
                            <a className={style.socialItems} href="#Facebook">
                                <i className="fab fa-facebook-square"></i>
                            </a>
                        </li>
                        <li className="mr-4">
                            <a className={style.socialItems} href="#Twitter">
                                <i className="fab fa-twitter-square"></i>
                            </a>
                        </li>
                        <li className="mr-4">
                            <a className={style.socialItems} href="#GooglePlus">
                                <i className="fab fa-google-plus-square"></i>
                            </a>
                        </li>
                        <li>
                            <a className={style.socialItems} href="#Discord">
                                <i className="fab fa-discord"></i>
                            </a>
                        </li>
                    </ul>
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
                </div>
            </header>
        );
    }
}

export default Header;

import React, { Component } from 'react';

class Header extends Component {
    render() {
        const style = {
            header: [
                "bg-kuru",
                "block",
                "border-b",
                "border-kuru-darker",
                "border-solid",
                "py-2",
                "text-white",
            ].join(" "),
            container: [
                "container",
                "flex",
                "items-center",
                "mx-auto",
            ].join(" "),
            logo: [
                "hover:text-grey-light",
                "logo-typography",
                "no-underline",
                "text-2xl",
                "text-white",
                "transition",
            ].join(" "),
            menu: [
                "flex",
                "list-reset",
                "ml-10",
            ].join(" "),
            menuItems: [
                "hover:text-grey-light",
                "no-underline",
                "text-white",
                "transition",
            ].join(" "),
            search: [
                "flex",
                "items-center",
                "ml-5",
            ].join(" "),
            searchField: [
                "bg-white",
                "border-b",
                "border-kuru-darker",
                "border-l",
                "border-solid",
                "border-t",
                "m-0",
                "outline-none",
                "p-2",
                "rounded-bl",
                "rounded-tl",
                "w-64",
            ].join(" "),
            searchButton: [
                "bg-white",
                "border-b",
                "border-kuru-darker",
                "border-r",
                "border-t",
                "m-0",
                "p-2",
                "rounded-br",
                "rounded-tr",
                "text-grey-dark",
            ].join(" "),
            social: [
                "flex",
                "list-reset",
                "ml-5",
            ].join(" "),
            socialItems: [
                "hover:text-grey-light",
                "no-underline",
                "text-white",
                "text-xl",
                "transition",
            ].join(" "),
            logIn: [
                "border-2",
                "border-solid",
                "border-white",
                "hover:bg-grey-lighter",
                "hover:border-grey-lighter",
                "hover:text-kuru",
                "mr-4",
                "no-underline",
                "px-6",
                "py-2",
                "rounded",
                "text-white",
                "transition",
            ].join(" "),
            signUp: [
                "bg-white",
                "border-2",
                "border-solid",
                "border-white",
                "hover:bg-grey-lighter",
                "hover:border-grey-lighter",
                "no-underline",
                "px-6",
                "py-2",
                "rounded",
                "text-kuru",
                "transition",
            ].join(" "),
        };
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
                            <a className={style.menuItems} href="https://blog.kuru-anime.com/" target="_blank" rel="noopener noreferrer">News</a>
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

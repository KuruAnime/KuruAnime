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
                "logo-typography",
                "no-underline",
                "text-2xl",
                "text-white",
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
            ].join(" "),
            search: [
                "flex",
                "items-center",
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
                "px-4",
                "py-2",
                "rounded-bl-full",
                "rounded-tl-full",
                "w-64",
            ].join(" "),
            searchButton: [
                "bg-white",
                "border-b",
                "border-kuru-darker",
                "border-r",
                "border-t",
                "m-0",
                "pl-2",
                "pr-3",
                "py-2",
                "rounded-br-full",
                "rounded-tr-full",
                "text-grey-dark",
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
                            <a className={style.menuItems} href="https://blog.kuru-anime.com/" target="_blank" rel="noopener noreferrer">Blog</a>
                        </li>
                    </ul>
                    <div className="ml-10">
                        <div className={style.search}>
                            <input className={style.searchField} placeholder="Search..." />
                            <button className={style.searchButton}>
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                    <div className="ml-auto">Login Field Here</div>
                </div>
            </header>
        );
    }
}

export default Header;

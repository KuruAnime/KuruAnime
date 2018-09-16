import React, { Component } from 'react';

class Header extends Component {
    render() {
        const style = {
            header: (`
                bg-kuru
                block
                border-b
                border-kuru
                border-solid
                py-2
                text-white
            `),
            container: (`
                container
                flex
                items-center
                mx-auto
            `),
            logo: (`
                logo-typography
                no-underline
                text-2xl
                text-white
            `),
            menu: (`
                flex
                list-reset
                ml-10
            `),
            menuItems: (`
                hover:text-grey
                no-underline
                text-white
            `),
            search: (`
                p-2
                rounded
            `),
        };
        return (
            <header className={style.header}>
                <div className={style.container}>
                    <a href="#" className={style.logo}>Kuru Anime</a>
                    <ul className={style.menu}>
                        <li className="mr-4">
                            <a className={style.menuItems} href="#">Home</a>
                        </li>
                        <li className="mr-4">
                            <a className={style.menuItems} href="#">About Us</a>
                        </li>
                        <li>
                            <a className={style.menuItems} href="https://blog.kuru-anime.com/" target="_blank">Blog</a>
                        </li>
                    </ul>
                    <div className="ml-10">
                        <input className={style.search} placeholder="Search Kuru Anime" />
                    </div>
                    <div className="ml-auto">Login Field Here</div>
                </div>
            </header>
        );
    }
}

export default Header;

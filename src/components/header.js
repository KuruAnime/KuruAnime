import React, { Component } from 'react';

class Header extends Component {
    render() {
        const style = {
            header: (`
                bg-kuru
                bg-grey-darker
                text-white
                block
                border-b
                border-solid
                border-red-darker
                py-2
            `),
            container: (`
                container
                mx-auto
                flex
                items-center
            `),
            logo: (`
                logo-typography
                text-2xl
                no-underline
                text-white
            `),
            menu: (`
                ml-10
                list-reset
                flex
            `),
            menuItems: (`
                text-white
                hover:text-grey
                no-underline
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
                    <div className="ml-10">Search Box Here</div>
                    <div className="ml-auto">Login Field Here</div>
                </div>
            </header>
        );
    }
}

export default Header;

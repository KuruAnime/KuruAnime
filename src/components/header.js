import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="bg-kuru bg-grey-darker text-white block border-b border-solid border-red-darker py-2">
                <div className="container mx-auto flex items-center">
                    <div className="logo-typography text-2xl">Kuru Anime</div>
                    <div className="ml-4">Menu Here</div>
                    <div className="ml-4">Search Box Here</div>
                    <div className="ml-auto">Login Field Here</div>
                </div>
            </header>
        );
    }
}

export default Header;

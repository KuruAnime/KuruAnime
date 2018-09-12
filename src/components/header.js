import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="bg-kuru bg-grey-darker text-white block py-2">
                <div className="container mx-auto flex items-center">
                    <div className="logo-typography text-4xl">K-Anime</div>
                    <div className="ml-4">Social Icons Here</div>
                    <div className="ml-auto">Login Field Here</div>
                </div>
            </header>
        );
    }
}

export default Header;

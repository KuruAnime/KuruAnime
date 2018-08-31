import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="text-center">
                <div>
                    Kuru Anime &copy; {(new Date()).getFullYear()}
                </div>
            </footer>
        );
    }
}

export default Footer;
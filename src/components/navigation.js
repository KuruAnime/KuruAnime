import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        const linkStyle = "mr-4 no-underline text-white bg-grey-darker hover:bg-grey-darkest p-4 inline-block rounded";
        return (
            <div>
                <nav className="container mx-auto py-4">
                    <Link className={linkStyle} to="/">Homepage</Link>
                    <Link className={linkStyle} to="/auth">Login / Register</Link>
                </nav>
            </div>
        );
    }
}

export default Navigation;
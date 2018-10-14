import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

import HomePage from '../pages/home';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <HomePage />
                <Footer />
            </div>
        );
    }
}

export default App;

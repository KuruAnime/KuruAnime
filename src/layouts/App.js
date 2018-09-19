import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container mx-auto py-4">Under Maintenance</div>
                <Footer />
            </div>
        );
    }
}

export default App;

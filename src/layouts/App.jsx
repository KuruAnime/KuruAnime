import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import UserAuthentication from '../pages/UserAuthentication';

class App extends Component {
    PageContent = () => {
        return (
            <div>
                <UserAuthentication />
            </div>
        );
    }
    render() {
        const { PageContent } = this;
        return (
            <div>
                <Header />
                <PageContent />
                <Footer />
            </div>
        );
    }
}

export default App;

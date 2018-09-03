import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../components/header';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

import AuthPage from '../pages/auth';
import HomePage from '../pages/homepage';

class App extends Component {
    PageContent = () => {
        return (
            <Router>
                <div>
                    <Navigation />
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/auth" component={AuthPage} />
                </div>
            </Router>
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

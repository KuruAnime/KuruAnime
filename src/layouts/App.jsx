import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../components/header';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

import UserAuthenticationPage from '../pages/userauthentication';
import HomePage from '../pages/homepage';

class App extends Component {
    PageContent = () => {
        return (
            <Router>
                <div>
                    <nav>
                        <Link to="/">Homepage</Link>
                        <Link to="/userauthentication">User Authentication</Link>
                    </nav>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/userauthentication" component={UserAuthenticationPage} />
                </div>
            </Router>
        );
    }
    render() {
        const { PageContent } = this;
        return (
            <div>
                <Header />
                <Navigation />
                <PageContent />
                <Footer />
            </div>
        );
    }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../components/header.jsx';
import Navigation from '../components/navigation.jsx';
import Footer from '../components/footer.jsx';

import UserAuthenticationPage from '../pages/userauthentication.jsx';
import HomePage from '../pages/homepage.jsx';

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

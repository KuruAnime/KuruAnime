import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

class About extends Component {
    render() {
        const { siteName } = this.props
        return (
            <div>
                <Helmet>
                    <title>{`About - ${siteName}`}</title>
                </Helmet>
                <p>About</p>
            </div>
        )
    }
}

export default About
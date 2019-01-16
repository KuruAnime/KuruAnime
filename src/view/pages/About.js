import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

class About extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>About - Kuru Anime</title>
                </Helmet>
                <p>About - {this.props.test}</p>
            </div>
        )
    }
}

export default About
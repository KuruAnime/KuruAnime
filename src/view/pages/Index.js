import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

class Index extends Component {
    render() {
        const { siteName, siteDescription } = this.props
        return (
            <div>
                <Helmet>
                    <title>{`${siteName} - ${siteDescription}`}</title>
                </Helmet>
                <p>Index</p>
            </div>
        )
    }
}

export default Index
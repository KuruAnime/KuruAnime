import React, { Component } from 'react'

class Header extends Component {
    render() {
        const { children, siteName, siteDescription } = this.props
        return (
            <header>
                <div>{siteName} - {siteDescription}</div>
                {children}
            </header>
        )
    }
}

export default Header
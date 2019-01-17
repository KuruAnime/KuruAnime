import React, { Component } from 'react'

class Header extends Component {
    render() {
        const { children } = this.props
        return (
            <header>
                <div>Kuru Anime</div>
                {children}
            </header>
        )
    }
}

export default Header
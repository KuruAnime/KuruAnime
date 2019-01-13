import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Header
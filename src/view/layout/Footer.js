import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer>
                {this.props.children}
            </footer>
        )
    }
}

export default Footer
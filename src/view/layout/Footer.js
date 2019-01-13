import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Footer
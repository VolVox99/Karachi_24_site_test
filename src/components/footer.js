import React, { Component } from 'react'
import Nav from '../components/Nav.js'

class Footer extends Component {
    render() {
        return (
            <div>
                 <footer>
                <Nav className = 'footer' containerName = 'footer_container'/>
                </footer>
            </div>
        )
    }
}

export default Footer

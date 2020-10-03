import React, { Component } from 'react'
import DisplayTime from '../components/time'
import Nav from '../components/Nav'
import Title from '../components/Title'

class Header extends Component {
    render() {
        return (
            <div>
            <header className="App-header">
                <DisplayTime/>
                <img src= 'https://media.discordapp.net/attachments/757033381396480013/761738130771804180/X24_Resized_and_transparent.png' className="App-logo" alt="logo" />
                 <Title className = 'Title'/>
                <Nav className = 'header' containerName = 'header_container' header = 'true'/> 
            </header>
            </div>
        )
    }
}

export default Header

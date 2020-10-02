import React, { Component } from 'react'

class Nav extends Component {
    render() {

            return (
                <div className ={this.props.containerName}>
                    <ul className = {`${this.props.className}_elem_1`}>Home</ul>
                    <ul className = {`${this.props.className}_elem_2`}>Breaking News</ul>
                    <ul className = {`${this.props.className}_elem_3`}>About</ul>
                    <ul className = {`${this.props.className}_elem_4`}>Contact</ul>
                </div>
            ) 
    }
}



class CurrentNav extends Component {
    render() {
        return (
            <h2 className = {this.props.className}>{this.props.elem}</h2>
                
        )
    }
}


export  {Nav, CurrentNav}

import React, { Component } from 'react'


class DisplayTime extends Component {
    constructor(){
        super()
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }

    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString()
         
          })
        }, 1000)
      }

    render() {
        return (
            <div className = 'display_time'>
                {this.state.time}
            </div>
        )
    }
}

export default DisplayTime

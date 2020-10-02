import React, { Component } from 'react'


class DisplayTime extends Component {
    constructor(){
        super()
        this.initial_time = new Date().toLocaleString()
        this.state = {
            time: this.initial_time.split(', ')[1]
    
        }
    }

    
    componentDidMount() {
        setInterval(() => {
            let time_to_pass = new Date().toLocaleString()
            time_to_pass = time_to_pass.split(',')[1]
            this.setState({
                time: time_to_pass
         
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

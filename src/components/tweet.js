import {TwitterTweetEmbed} from 'react-twitter-embed'
import React, { Component } from 'react'




export class tweet extends Component {
    render() {
        return (
            <div className = {this.props.className}>
               <TwitterTweetEmbed tweetId={this.props.TweetID}/> 
            </div>
        )
    }
}

export default tweet

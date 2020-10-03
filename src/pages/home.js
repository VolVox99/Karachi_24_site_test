import React, { Component } from 'react'
import TweetElement from 'C:/Users/Ali R/Desktop/Code/Node/karachi_test/src/components/tweet.js'
import MainParagraph from 'C:/Users/Ali R/Desktop/Code/Node/karachi_test/src/components/mainParagraph.js'

class Home extends Component {
    render() {
        return (
            <div>
                <div className = 'AppBody-left'>
                <div className = 'Tweets'>
                <TweetElement TweetID = {'1307146933513998337'} className = 'testTweet'/>
                <TweetElement TweetID = {'1307139737434587137'} className = 'testTweet'/>
                <TweetElement TweetID = {'1307137757366681600'} className = 'testTweet'/>
                </div>

            </div>
            <div className = "AppBody-right">
                <img className = 'wordCloud' src = 'https://media.discordapp.net/attachments/754009532136685569/761710495773753420/karachi_wordcloud_1.png?width=1194&height=677' alt = 'wasnt found'/>
                <MainParagraph className = 'main-par'/>
            </div>
            </div>
        )
    }
}

export default Home

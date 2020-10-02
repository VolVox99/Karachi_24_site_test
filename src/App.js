import React from 'react';
import './App.css';
import DisplayTime from './components/time'
import {Nav as NavElements, CurrentNav} from './components/Nav'
import TweetElement from './components/tweet'
import MainParagraph from './components/mainParagraph'
import Title from './components/Title'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DisplayTime/>
        <img src= 'https://media.discordapp.net/attachments/754009532136685569/760708579904192542/20200929_204356.png' className="App-logo" alt="logo" />
        <Title className = 'Title'/>
        <NavElements className = 'header' containerName = 'header_container'/> 
        <CurrentNav className = 'current_elem' elem = 'Home'/>
      </header>

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

      <footer>
        <NavElements className = 'footer' containerName = 'footer_container' />
      </footer>
  
    </div>
      
  );
}

export default App;

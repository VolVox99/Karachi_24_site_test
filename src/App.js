import React from 'react';
import './App.css';
import Home from './pages/home.js'
import About from './pages/about.js'
import BreakingNews from './pages/breaking_news'
import Contact from './pages/contact'
import ContactSubmit from './pages/contact_submit'
import Header from './components/header'
import Footer from './components/footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'




function App() {
  return (
    <Router>
      <div className="App">
        <Header/>

        <Switch>
          <Route path = '/home' component = {Home}/>
          <Route path = '/about'  component = {About}/>
          <Route path = '/breaking-news'component = {BreakingNews}/>
          <Route path = '/contact' exact component = {Contact}/>
          <Route path = '/contact-submit' component = {ContactSubmit}/>
          <Route path = '/' component = {Home}/>
        </Switch>
        
     
        <Footer/> 
      
      </div>
    </Router>

  
  );
}

export default App;

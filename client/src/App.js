import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import remixLogo from './img/Remix-Logo.jpg';
import Gallery from './Gallery';
import UserRemixGallery from './UserRemixGallery';
import ImageRemixHistory from './ImageRemixHistory';
import Loginregisterpage from './Loginregisterpage';
import Sendemail from './Sendemail';
//import Uploadbutton from './Uploadbutton';

class App extends Component {

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={remixLogo} className="App-logo" alt="logo" />
          <div className="navbar">
              <Link to="/Gallery">Gallery</Link>
              <Link to="/UserRemixGallery">Remixes</Link>
              <Link to="/Loginregisterpage">Login</Link>
          </div>
        </header>

        <div className="routes">
            <Switch>
              <Route exact path="/Gallery" component={Gallery} />
              <Route exact path="/UserRemixGallery" component={UserRemixGallery} />
              <Route exact path="/gallery/:id" component={ImageRemixHistory} />
              <Route exact path="/Loginregisterpage" component={Loginregisterpage} />
              <Route exact path="/Sendemail" component={Sendemail} />
              <Route exact path="/" component={Gallery} />
            </Switch>
        </div>
        
      </div>
    );
  }
}

export default App;

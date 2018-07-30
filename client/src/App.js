import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import remixLogo from './Remix-Logo.png';
import Gallery from './Gallery';
import UserRemixGallery from './UserRemixGallery';
import ImageRemixHistory from './ImageRemixHistory';
import Loginregisterpage from './Loginregisterpage';
import Sendemail from './Sendemail';


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
              <Link to="/Sendemail">Email</Link>
          </div>
        </header>

        <div className="routes">
            <Switch>
              <Route exact path="/Gallery" component={Gallery} />
              <Route exact path="/UserRemixGallery" component={UserRemixGallery} />
              <Route exact path="/ImageRemixHistory" component={ImageRemixHistory} />
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

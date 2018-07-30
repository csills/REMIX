import React, { Component } from 'react';
//import Axios from 'axios'; ???
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import remixLogo from './Remix-Logo.png';
import Gallery from './Gallery';
import './Gallery.css';
import UserRemixGallery from './UserRemixGallery';
import ImageRemixHistory from './ImageRemixHistory';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={remixLogo} className="App-logo" alt="logo" />
          <div className="navbar">
              <Link to="/">Gallery</Link>
              <Link to="/UserRemixGallery">Remixes</Link>

              <Switch>
                <Route exact path="/Gallery" component={Gallery} />
                <Route exact path="/UserRemixGallery" component={UserRemixGallery} />
                <Route exact path="/ImageRemixHistory" component={ImageRemixHistory} />
              </Switch>
          </div>
        </header>
        <div>
         
          <Gallery />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
//import Axios from 'axios'; ???
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import remixLogo from './Remix-Logo.png';
import Gallery from './Gallery';
import './Gallery.css';
import UserRemixGallery from './UserRemixGallery';


class App extends Component {
  constructor() {
    super();
    this.state = {
      remixTagLine: "A space to create and re-create."
    }
  }



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
          </Switch>
          </div>
        </header>
        <div>
          <h2>{this.state.remixTagLine}</h2>
          <p className="App-intro">
          "Remix culture, sometimes read-write culture, is a society that allows and encourages derivative works by combining or editing existing materials to produce a new creative work or product."
          </p>
          <Gallery />
        </div>
      </div>
    );
  }
}

export default App;

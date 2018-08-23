import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './css/App.css';
import remixLogo from './img/Remix-Logo.jpg';
import Gallery from './components/Gallery';
import ImageRemixHistory from './components/ImageRemixHistory';
import Loginregisterpage from './components/Loginregisterpage';
import About from './components/About';

class App extends Component {

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={remixLogo} className="App-logo" alt="logo" />
          <div className="navbar">
              <Link to="/Gallery">Gallery</Link>
              {/* <Link to="/UserRemixGallery">Remixes</Link> */}
              <Link to="/Loginregisterpage">My Remix</Link>
              <Link to="/About">About</Link>
          </div>
        </header>

        <div className="routes">
            <Switch>
              <Route exact path="/Gallery" component={Gallery} />
              {/* <Route exact path="/UserRemixGallery" component={UserRemixGallery} /> */}
              <Route exact path="/gallery/:id" component={ImageRemixHistory} />
              <Route exact path="/Loginregisterpage" component={Loginregisterpage} />
              <Route exact path="/About" component={About} />
              <Route exact path="/" component={Gallery} />
            </Switch>
        </div>
        
      </div>
    );
  }
}

export default App;

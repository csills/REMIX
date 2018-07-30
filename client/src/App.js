import React, { Component } from 'react';
//import Axios from 'axios'; ???
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import remixLogo from './Remix-Logo.png';
import Gallery from './Gallery';
import './Gallery.css';
import UserRemixGallery from './UserRemixGallery';
<<<<<<< HEAD
import ImageRemixHistory from './ImageRemixHistory';

=======
import Loginregisterpage from './Loginregisterpage';
import Sendemail from './Sendemail';
// import downloadimage from './one.jpg'
>>>>>>> master

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={remixLogo} className="App-logo" alt="logo" />
          <div className="navbar">
              <Link to="/Gallery">Gallery</Link>
              <Link to="/UserRemixGallery">Remixes</Link>
              <Link to="/Loginregisterpage">Login / Register</Link>
              <Link to="/Sendemail">Email</Link>
          </div>
          <div className="routes">
              <Switch>
                <Route exact path="/Gallery" component={Gallery} />
                <Route exact path="/UserRemixGallery" component={UserRemixGallery} />
<<<<<<< HEAD
                <Route exact path="/ImageRemixHistory" component={ImageRemixHistory} />
=======
                <Route exact path="/Loginregisterpage" component={Loginregisterpage} />
                <Route exact path="/Sendemail" component={Sendemail} />
                <Route exact path="/" component={Gallery} />
>>>>>>> master
              </Switch>
          </div>
          {/* <div refs='gallery-container' className='container-fluid gallery-container'>
            <div className='row'>
                <a href="/UserRemixGallery"><img src={downloadimage} /></a>
            </div>
        </div> */}
        </header>
      </div>
    );
  }
}

export default App;

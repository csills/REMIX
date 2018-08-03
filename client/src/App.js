import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import remixLogo from './Remix-Logo.jpg';
import Gallery from './Gallery';
import UserRemixGallery from './UserRemixGallery';
import ImageRemixHistory from './ImageRemixHistory';
import Loginregisterpage from './Loginregisterpage';
import Sendemail from './Sendemail';
import Uploadbutton from './Uploadbutton';
// import axios from 'axios';

// axios({
//   url: 'http://localhost:3001/api/remix/upload/hi.jpg',
//   method: 'GET',
//   responseType: 'blob', // important
// }).then((response) => {
//   const url = window.URL.createObjectURL(new Blob([response.data]));
//   const link = document.createElement('a');
//   link.href = url;
//   link.setAttribute('download', 'file.pdf');
//   document.body.appendChild(link);
//   link.click();
// });

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
              <Route exact path="/gallery/:id" component={ImageRemixHistory} />
              <Route exact path="/Loginregisterpage" component={Loginregisterpage} />
              <Route exact path="/Sendemail" component={Sendemail} />
              <Route exact path="/" component={Gallery} />
            </Switch>
        </div>
        <div>
          <Uploadbutton />
        </div>
      </div>
    );
  }
}

export default App;

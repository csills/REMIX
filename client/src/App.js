import React, { Component } from 'react';
//import Axios from 'axios';
//import { Link, Route } from 'react-router-dom';
import './App.css';
import Gallery from './Gallery';
import './Gallery.css';
import './Remix-Logo.png';


class App extends Component {
  constructor() {
    super();
    this.state = {
      collab: "A space to create and re-create."
    }
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="Remix-Logo.png" className="App-logo" alt="logo" />
        </header>
        <h2>{this.state.collab}</h2>
        <p className="App-intro">
         "Remix culture, sometimes read-write culture, is a society that allows and encourages derivative works by combining or editing existing materials to produce a new creative work or product."
        </p>
        <Gallery />
      </div>
      
    );
  }
}

export default App;

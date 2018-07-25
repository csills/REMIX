import React, { Component } from 'react';
import logo from './logo.svg';
//import axios from 'axios';
import './App.css';
import Gallery from './Gallery';
import './Gallery.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      collab: "Where Creative's Collaborate"
    }
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Collaborative REMIX</h1>
        </header>
        <p className="App-intro">
          A space to create and re-create.
        </p>
        <h1>{this.state.collab}</h1>
        <Gallery />
      </div>
      
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      remix: "Remix yo' Pics"
    }
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">PIC REMIX</h1>
        </header>
        <p className="App-intro">
          A place to re-create your photos.
        </p>
        <h1>{this.state.remix}</h1>
        <button>Upload</button>
        <button>Download</button>
      </div>
    );
  }
}

export default App;

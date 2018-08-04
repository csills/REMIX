import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';


class About extends Component {


  render() {
    return(
        <div className="about">
            <div className="card">
              <h2>CRYSTAL SILLS</h2>
              <button href="https://github.com/csills" className="submitbuttons">GITHUB</button>
            </div>
            <div className="card">
              <h2>HYUN JOO NAM</h2>
              <button href="https://github.com/hyunjoonam" className="submitbuttons">GITHUB</button>
            </div>
      </div>
    );
  }
}

export default About;

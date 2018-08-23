import React, { Component } from 'react';

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

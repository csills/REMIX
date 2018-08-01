import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class Uploadbutton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);

    fetch('http://localhost:3001/upload', {
      method: 'POST',
      body: {filepath: event.target.uploadedImage},
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ filepath: `http://localhost:3001/${body.file}` });
      });
    });
  }

  render() {
    return (
      <form onSubmit={this.handleUploadImage}>
        <div>
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
        </div>
        <div>
          <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" />
        </div>
        <br />
        <div>
          <button>Upload</button>
        </div>
        <div className='uploadedImage'>
            <img src={this.state.filepath} alt="img" />
        </div>
      </form>
    );
  }
}

export default Uploadbutton;
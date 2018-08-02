import React, { Component } from 'react';
import axios from 'axios';

// import Sendemail from './components/Sendemail';

class Remix extends Component {
    constructor() {
        super();
        this.state = {
            filepath: []
        }

        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        data.append('filename', this.fileName.value);    
    }
    
    
    componentDidMount() {
        axios.get('/').then(({data})=>{
        this.setState(data)
        });
      }
    
    remixedimage() {
        // axios.post('/api/remix2').then(({data})=>{
        axios.post('/api/remix').then(({data})=>{
        this.setState(data);
        })
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
            <img src={this.state.filepath} alt="img" />
          </form>
        );
    }
    }
      
export default Remix;

// componentDidMount() {
//     $.ajax({
//       url: this.props.url,
//       dataType: 'json',
//       cache: false,
//       success: function(data) {
//         this.setState({data: data});
//       }.bind(this),
//       error: function(xhr, status, err) {
//         console.error(this.props.url, status, err.toString());
//       }.bind(this)
//     });
//   }
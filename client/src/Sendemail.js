import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// import Sendemail from './components/Sendemail';

class Sendemailfunction extends Component {
    constructor() {
        super();
        this.state = {
            transporter: []
        }
    }
    
    componentDidMount() {
        axios.get('/').then(({data})=>{
        this.setState(data)
        });
      }
    
    sendemail() {
        axios.post('/api/mail').then(({data})=>{
        this.setState(data);
        })
        alert('Check your inbox!');
    }
    
    render() {
        return (
            <div>
                <div className="Email">
                    <button onClick={this.sendemail.bind(this)}>Subscribe</button>
                </div>
            </div>
        );
    }
    }
      
export default Sendemailfunction;

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
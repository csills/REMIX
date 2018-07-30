import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import downloadimage from './one.jpg'

//This is where a User can see all images they have Remixed
class UserRemixGallery extends Component {
    render() {
        return  (
        <div>
            <h1>"User's Name" Remix Gallery</h1>
            {<Link to="/Gallery">take me back to the main gallery plz</Link> }
            <div refs='gallery-container' className='container-fluid gallery-container'>
                <div className='row'>
                    <img src= {downloadimage} />
                    <a href={downloadimage} download>
                        <button>Download This Photo</button>
                    </a>
                </div>
            </div>
        </div>
        )
    }
}

export default UserRemixGallery;
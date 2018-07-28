import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//This is where a User can see all images they have Remixed
class UserRemixGallery extends Component {
    render() {
        return  (
        <div>
            <h1>"User's Name" Remix Gallery</h1>
            {<Link to="/Gallery">take me back to the main gallery plz</Link> }
        </div>
        )
    }
}

export default UserRemixGallery;
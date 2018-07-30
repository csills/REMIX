import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//This is where a User can see all images they have Remixed and/or Downloaded
class UserRemixGallery extends Component {
    render() {
        return  (
        <div>
            <h1>"User's Name" Remix Gallery</h1>
            {<Link to="/Gallery">Main Gallery</Link> }

            <div refs='gallery-container' className='container-fluid gallery-container'>
                <div className='row'>
                    <div className='col-sm-6 col-md-3 col-xl-2'>
                        <div className = 'gallery-card'>
                        {/* All of the Users Downloads/Remixes will display here
                        
                        */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default UserRemixGallery;
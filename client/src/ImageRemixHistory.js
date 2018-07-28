import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//This is where a User can see all images they have Remixed
class ImageRemixHistory extends Component {
    render() {
        return  (
        <div>
            <h1>Checkout this Images Remix History</h1>
            {<Link to="/Gallery">take me back to the main gallery plz</Link> }
            <img src='http://civitasinc.com/2013/wp-content/uploads/2013/08/image-coming-soon.jpg' alt='Coming Soon'/>
            {/* This is where the single image clicked in Gallery will appear 
                along with Upload/Download buttons
                followed by smaller sized images of all the Remixes related to 
                that original Gallery Image
            
            */}
        </div>
        )
    }
}

export default ImageRemixHistory;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import downloadimage from './one.jpg'

//This is where a User can see all images they have Remixed
class ImageRemixHistory extends Component {
    render() {
        return  (
            <div>
                {<Link to="/Gallery">Main Gallery</Link> }
                
                <div refs='gallery-container' className='container-fluid gallery-container'>
                    <div className='row'>
                        <div className='imageDownloadBox'>
                            <img src= {downloadimage} alt={this.props.alt} />
                            <a href={downloadimage} download>
                            <br/>
                            <br/>
                            <button>Download This Photo</button>
                            </a>
                        </div>
                    </div>

                    {/* This is where all the remixes submitted for an 
                        Indiviual image will appear: */}
                    <h1>Checkout this Images Remix History</h1>
                    <div refs='remix-gallery-container' className='container-fluid gallery-container'>
                        <div className='row'>
                            <div className='col-sm-6 col-md-3 col-xl-2'>
                                <div className='gallery-card'>
                                     {/*Remix Images Go Here*/} 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageRemixHistory;
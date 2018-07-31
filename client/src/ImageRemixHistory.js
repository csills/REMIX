import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

let image = 'http://bomdia.lu/wp-content/uploads/sites/7/2016/12/intelectual.jpg'
//This is where a User can see all images they have Remixed
class ImageRemixHistory extends Component {
    render() {
        return  (
            <div>
                {<Link to="/Gallery">Main Gallery</Link> }
                
                <div refs='gallery-container' className='container-fluid gallery-container'>
                    <div className='row'>
                        <div className='imageDownloadBox'>
                            <img src= {image} alt={this.props.alt} />
                            <a href={image} download>
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
                                     <img className='gallery-thumbnail' src='http://img.over-blog-kiwi.com/0/84/27/39/20140506/ob_04cca0_1901994-809625892384301-54454870-n.jpg' alt='remix'/>
                                     <img className='gallery-thumbnail' src='http://www.bimago.com/canvas-prints/street-art/banksy-the-thinker-monkey-94551.html' alt='remix'/>
                                     <img className='gallery-thumbnail' src='http://civitasinc.com/2013/wp-content/uploads/2013/08/image-coming-soon.jpg' alt='remix'/>
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
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
//import './Gallery.css';
import './ImageRemixHistory.css';

let image = 'http://bomdia.lu/wp-content/uploads/sites/7/2016/12/intelectual.jpg'

let imgUrls = [
    'https://source.unsplash.com/hKU5dmGfSKY/800x600',
    'https://source.unsplash.com/PRwcKlZDpc0/800x600',
    'http://img.over-blog-kiwi.com/0/84/27/39/20140506/ob_04cca0_1901994-809625892384301-54454870-n.jpg'
  ];

class ImageRemixHistoryImages extends Component {

render() {
    return(
        <img className={this.props.className} src={this.props.src} alt={this.props.alt} />
    );
}
}
//This is where a User can see all images they have Remixed
class ImageRemixHistory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: '',
        };
    }


    componentDidMount() {
      axios.get('/routes/remixes')
        .then(( {data} ) => {

          this.setState({ remixes:data });
          console.log(data);
        })
    }

    render() {
        return  (
            <div>
            <div>
                {<Link to="/Gallery">Main Gallery</Link> }
                
                <div refs='remix-gallery-container' className='container-fluid gallery-container'>
                    <div className='row'>
                        <div className='imageDownloadBox'>
                            <img className='img-responsive center-block img-rounded' src= {image} alt={this.props.alt}/>
                            <br/>
                            <br/>
                            <a href={image} download>
                            <button>Download This Photo</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        

            {/* This is where all the remixes submitted for an 
                Indiviual image will appear: */}
            <h1>Checkout this Images Remix History</h1>
            <div refs='remix-gallery-container' className='container-fluid gallery-container'>
                <div className='row'>
                    {
                        imgUrls.map((url, index) => {
                            return <div className='col-sm-6 col-md-3 col-xl-2'>
                                <div className = 'gallery-card'>
                                    <ImageRemixHistoryImages className='gallery-thumbnail' src={url} alt={'Image number ' + (index + 1)} />
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
        )
    }
}

export default ImageRemixHistory;
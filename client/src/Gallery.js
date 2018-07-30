import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './Gallery.css';
import ImageRemixHistory from './ImageRemixHistory';
import downloadimage from './one.jpg'

// Cache gallery container
//const galleryContainer = document.querySelector('.react-gallery');

// Create new array with URLs for images
// let imgUrls = [
//   'https://source.unsplash.com/3Z70SDuYs5g/800x600',
//   'https://source.unsplash.com/01vFmYAOqQ0/800x600',
//   'https://source.unsplash.com/2Bjq3A7rGn4/800x600',
//   'https://source.unsplash.com/t20pc32VbrU/800x600',
//   'https://source.unsplash.com/pHANr-CpbYM/800x600',
//   'https://source.unsplash.com/3PmwYw2uErY/800x600',
//   'https://source.unsplash.com/uOi3lg8fGl4/800x600',
//   'https://source.unsplash.com/CwkiN6_qpDI/800x600',
//   'https://source.unsplash.com/9O1oQ9SzQZQ/800x600',
//   'https://source.unsplash.com/E4944K_4SvI/800x600',
//   'https://source.unsplash.com/-hI5dX2ObAs/800x600',
//   'https://source.unsplash.com/vZlTg_McCDo/800x600'
// ];

// Component for gallery images
// class GalleryImages extends Component {

//   imageClick = () => {
//     console.log('Image was Clicked!!!!');
//     //Open new page with clicked Gallery Image, upload/download buttons,
//     //and images of all Remixes made of that original Gallery image
//     //use a route here to ImageRemixHistory.js???
//   }

  render() {
    return(
      <Link to="/ImageRemixHistory">
        <img className={this.props.className} src={this.props.src} alt={this.props.alt} />
      </Link>
    );
  }
//   render() {
//     return(
//       <img className={this.props.className} src={this.props.src} alt={this.props.alt} onClick={this.imageClick} />
//     );
//   }
// }


// Component for gallery
class Gallery extends Component{
  // Is this constructor necessary?
  constructor(props) {
    super(props);
    
    this.state = {
      remixTagLine: "A space to create and re-create.",
      url: ''
    }
    
  }
  
  render() {
    return(
      <div>
        <div>
          <h2>{this.state.remixTagLine}</h2>
          <p className="App-intro">
          "Remix culture, sometimes read-write culture, is a society that allows and encourages derivative works by combining or editing existing materials to produce a new creative work or product."
          </p>
        </div>
        <div refs='gallery-container' className='container-fluid gallery-container'>
          <div className='row'>
            {/* {
              imgUrls.map((url, index) => {
                return <div className='col-sm-6 col-md-3 col-xl-2'>
                    <div className='gallery-card'>
                      <GalleryImages className='gallery-thumbnail' src={url} alt={'Image number ' + (index + 1)} />  
                    </div>
                  </div>
              })
            } */}
              <h2>when you click image, it redirects to User Remix Gallery</h2>
              <a href='/UserRemixGallery'><img src={downloadimage}/></a>
          </div>
        </div>
      </div>
    )
  }

}

export default Gallery;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import './Gallery.css';


// Array with URLs for Gallery Images
let imgUrls = [
   'https://source.unsplash.com/WNAccGuvPYU/800x600',
   'https://source.unsplash.com/E4944K_4SvI/800x600',
   'https://source.unsplash.com/3Z70SDuYs5g/800x600',
   'https://source.unsplash.com/01vFmYAOqQ0/800x600',
   'https://source.unsplash.com/2Bjq3A7rGn4/800x600',
   'https://source.unsplash.com/t20pc32VbrU/800x600',
   'https://source.unsplash.com/pHANr-CpbYM/800x600',
   'https://source.unsplash.com/3PmwYw2uErY/800x600',
   'https://source.unsplash.com/uOi3lg8fGl4/800x600',
   'https://source.unsplash.com/WGJkReFcj1k/800x600',
   'https://source.unsplash.com/-hI5dX2ObAs/800x600',
   'https://source.unsplash.com/vZlTg_McCDo/800x600'
 ];

//  Component for gallery images
class GalleryImages extends Component {

  render() {
    return(
      <Link to={`/gallery/${this.props.galleryid}`}>
        <img className={this.props.className} src={this.props.src} alt={this.props.alt} />
      </Link>
    );
  }
}

// This is where all Gallery Images are displayed
class Gallery extends Component{
  // Is this constructor necessary?
  constructor(props) {
    super(props);
    
    this.state = {
      remixTagLine: "A space to create and re-create.",
      url: '',
      galleries: []
    };
  }

  componentDidMount() {
    axios.get('/api/galleries')
      .then(( {data} ) => {
        this.setState({ galleries: data });
        console.log(data);
      })
  }
    

  
  render() {
    return(
      <div>
        <div>
          <h2>{this.state.remixTagLine}</h2>
          <p className="App-intro">
          Remix culture, sometimes read-write culture, is a society that allows and encourages derivative works by combining or editing existing materials to produce a new creative work or product.
          </p>
        </div>

        <div refs='gallery-container' className='container-fluid gallery-container'>
          <div className='row'>
            {
              this.state.galleries.map((gallery, index) => {
              //this.state.gallery.map((url, index) => {
                return <div className='col-sm-6 col-md-3 col-xl-2'>
                    <div className='gallery-card'>
                      <GalleryImages className='gallery-thumbnail' a href='/ImageRemixGallery' src={gallery.filepath} alt={'Image number ' + (index + 1)} galleryid={gallery.id} />  
                    </div>
                </div>
              })
            }
              {/*<h2>when you click image, it redirects to User Remix Gallery</h2>
              <a href='/ImageRemixGallery'><img src={downloadimage} alt={this.props.alt}/></a>
              */}
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/App.css';
import '../css/Gallery.css';


class GalleryImages extends Component {

// Render connecting to database
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
  constructor(props) {
    super(props);
    
    this.state = {
      remixTagLine: "A space to create and re-create.",
      url: '',
      galleries: []
    };
  }
  
  componentDidMount() {
    // use axios.get to fill Gallery with gallery images:
    axios.get('/api/galleries')
      .then(( {data} ) => {
        this.setState({ galleries: data });
        console.log(data);
      })
  }

  render() {
    return(
      
      <div>
        <div className="app-intro">
          <h2>{this.state.remixTagLine}</h2>
          Remix culture, sometimes read-write culture, is a society that allows and encourages derivative works by combining or editing existing materials to produce a new creative work or product.
        </div>

        <div refs='gallery-container' className='container-fluid gallery-container'>
          <div className='row'>
            {
              //imgUrls.map((url, index) => {
              // below is the code to use when switching over to call images from database:
              this.state.galleries.map((gallery, index) => {
                return <div key={index} className='col-sm-6 col-md-3 col-xl-2'>
                    <div className='gallery-card'>
                      {/* First line of code for img Array in file, Second line calls to database */}
                      {/* <GalleryImages className='gallery-thumbnail' a href='/ImageRemixGallery' src={url} alt={'Image number ' + (index + 1)} /> */}
                      <GalleryImages className='gallery-thumbnail' a href='/ImageRemixGallery' src={gallery.filepath} alt={'Image number ' + (index + 1)} galleryid={gallery.id} />
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

export default Gallery;

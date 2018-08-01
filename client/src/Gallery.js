import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';
import './App.css';
import './Gallery.css';


// Array with URLs for Gallery Images
let imgUrls = [
  'img/Mona_Lisa_Original.jpg',
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
      <Link to="/ImageRemixHistory">
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
      //gallery: []
    };
  }

  /*
    componentDidMount() {
      axios.get('/routes/gallery')
        .then(( {data} ) => {

          this.setState({ gallery:data });
          console.log(data);
        })
    }
  */
    

  
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
              imgUrls.map((url, index) => {
              //this.state.gallery.map((url, index) => {
                return <div className='col-sm-6 col-md-3 col-xl-2'>
                    <div className='gallery-card'>
                      <GalleryImages className='gallery-thumbnail' a href='/ImageRemixGallery' src={url} alt={'Image number ' + (index + 1)} />  
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

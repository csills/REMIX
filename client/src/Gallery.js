import React, { Component } from 'react';
import './Gallery.css';

// Cache gallery container
//const galleryContainer = document.querySelector('.photo-gallery');

// Create new array with URLs for images
let imgUrls = [
  'https://source.unsplash.com/3Z70SDuYs5g/800x600',
  'https://source.unsplash.com/01vFmYAOqQ0/800x600',
  'https://source.unsplash.com/2Bjq3A7rGn4/800x600',
  'https://source.unsplash.com/t20pc32VbrU/800x600',
  'https://source.unsplash.com/pHANr-CpbYM/800x600',
  'https://source.unsplash.com/3PmwYw2uErY/800x600',
  'https://source.unsplash.com/uOi3lg8fGl4/800x600',
  'https://source.unsplash.com/CwkiN6_qpDI/800x600',
  'https://source.unsplash.com/9O1oQ9SzQZQ/800x600',
  'https://source.unsplash.com/E4944K_4SvI/800x600',
  'https://source.unsplash.com/-hI5dX2ObAs/800x600',
  'https://source.unsplash.com/vZlTg_McCDo/800x600'
];

// Component for gallery image
class GalleryImage extends Component {
  render() {
    return(
      <img className={this.props.className} src={this.props.src} alt={this.props.alt} />
    )
  }
}

//Component for gallery modal
class GalleryModal extends Component {
  render() {
    if (this.props.isOpen === false) {
      return null;
    }
    
    return(
      <div isOpen={this.props.isOpen} className='modal-overlay' onClick={this.props.onClick} name={this.props.name}>
        <div className='modal-body'>
          <a className='modal-close' href='https://source.unsplash.com/vZlTg_McCDo/800x600' onClick={this.props.onClick}><span className='fa fa-times'></span></a>
          
          <img src={this.props.src} alt='gallery' />
        </div>
      </div>
    )
  }
}

// Component for gallery
class Gallery extends Component{
  constructor(props) {
    super(props);
    
    this.state = {
      showModal: false,
      url: ''
    }
    
    this.openModal = this.openModal.bind(this);
    
    this.closeModal = this.closeModal.bind(this);
  }
  
  
  render() {
    return(
      <div refs='gallery-container' className='container-fluid gallery-container'>
        <div className='row'>
          {
            imgUrls.map((url, index) => {
               return <div className='col-sm-6 col-md-3 col-xl-2'>
                  <div className='gallery-card'>
                    <GalleryImage className='gallery-thumbnail' src={url} alt={'Image number ' + (index + 1)} />
                    
                    <span className='card-icon-open fa fa-expand' value={url} onClick={(e) => this.openModal(url, e)}></span>
                  </div>
                </div>
             })
           }
        </div>
        
        <GalleryModal isOpen={this.state.showModal} onClick={this.closeModal} src={this.state.url} /> 
      </div>
    )
  }
  
  
  // Function for opening modal dialog
  openModal(url, e) {
     this.setState({
       showModal: true,
       url: url
     })
   };

  // Function for closing modal dialog
  closeModal() {
    this.setState({
      showModal: false,
      url: ''
    })
  }
}


export default Gallery;

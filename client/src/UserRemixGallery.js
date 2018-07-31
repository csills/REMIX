import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './UserRemixGallery.css';


// Array with URLs for User Remix Gallery Images
let imgUrls = [
    'http://img.over-blog-kiwi.com/0/84/27/39/20140506/ob_04cca0_1901994-809625892384301-54454870-n.jpg',
    'https://source.unsplash.com/hKU5dmGfSKY/800x600',
    'https://source.unsplash.com/PRwcKlZDpc0/800x600'
  ];


  class UserRemixGalleryImages extends Component {

    render() {
      return(
          <img className={this.props.className} src={this.props.src} alt={this.props.alt} />
      );
    }
  }


//This is where a User can see all images they have Remixed and/or Downloaded
class UserRemixGallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: '',
        };
    }



    render() {
        return (
        <div>
            <div className="UserRemix">
                <h1 className="UserName">"User's Name" Remix Gallery</h1>
                {<Link to="/Gallery">Main Gallery</Link> }
            </div>

            <div refs='gallery-container' className='container-fluid gallery-container'>
                <div className='row'>
                    {
                        imgUrls.map((url, index) => {
                            return <div className='col-sm-6 col-md-3 col-xl-2'>
                                <div className = 'gallery-card'>
                                    <UserRemixGalleryImages className='gallery-thumbnail' src={url} alt={'Image number ' + (index + 1)} />
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

export default UserRemixGallery;
import React, { Component } from 'react';
import './App.css';
import './UserRemixGallery.css';


// Array with URLs for User Remix Gallery Images
let imgUrls = [
    'https://culturehog.com/wp-content/uploads/mona-lisa-funny-pics-31.jpg',
    'https://culturehog.com/wp-content/uploads/mona-lisa-funny-pics-02.jpg',
    'https://culturehog.com/wp-content/uploads/mona-lisa-funny-pics-12.jpg',
    'https://culturehog.com/wp-content/uploads/mona-lisa-funny-pics-32.jpg',
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
                <h1 className="UserName">Crystal's Remix Gallery</h1>
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
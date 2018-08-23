import React, { Component } from 'react';
import axios from 'axios';
import '../css/App.css';
import '../css/UserRemixGallery.css';

class UserRemixGalleryImages extends Component {
    render() {
        return(
            <img className={this.props.className} src={this.props.src} alt={this.props.alt} />
        );
    }
}

//This is where a User can see all images they have Remixed
class UserRemixGallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: '',
            gallery: {
                Remixes: [],
            },
        };
    }
    
    componentDidMount() {
      // use axios.get to get all remixes associated with the selected Gallery Image:

      axios.get(`/api/userremix/`)
      .then(( {data} ) => {
          console.log(data);
          this.setState({ gallery: {
            Remixes: data,
        },});
      })
    }
  
    render() {
        return  (
        <div>
            <div className="UserRemix">
                <h2 className="UserName">My Remixes</h2>
            </div>

            <div refs='remix-gallery-container' className='container-fluid gallery-container'>
                <div className='row'>
                    {
                        //imgUrls.map((url, index) => {
                        this.state.gallery.Remixes.map((remix, index) => {
                            return <div key={index} className='col-sm-6 col-md-3 col-xl-2'>
                                <div className = 'gallery-card'>
                                    <UserRemixGalleryImages className='gallery-thumbnail' src={remix.filepath} alt={'Image number ' + (index + 1)} />
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

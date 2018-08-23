import React, { Component } from 'react';
import axios from 'axios';
import '../css/App.css';
import '../css/ImageRemixHistory.css';

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
            gallery: {
                Remixes: [],
            },
        };
    }

    // Handling the upload Button:
    // See routes/api/remix.js --- we need to add a router.post to handle
    // when a user clicks the "upload button" to upload the URL Filepath of a new Remix Image
    fileSelectedHandler = event => {
        console.log("Selected", event.target.value)
        this.setState({
            selectedFile: event.target.value
        })
    }

    fileUploadHandler = () => {
        // console.log("submitting", this.state.gallery);
        axios.post(`/api/remix/`, {filepath: this.state.selectedFile, GalleryId: this.state.gallery.id})//sends upload to Remix Database with UserId and GalleryId
            .then(res => {
                console.log(res);
            });
    }
    
    componentDidMount() {
      // use axios.get to get all remixes associated with the selected Gallery Image:

      axios.get(`/api/gallery/${this.props.match.params.id}`)
      .then(( {data} ) => {
          this.setState({ gallery: data });
          console.log(data);
      })
    }
  
    render() {
        return  (
        <div>
            <div refs='remix-gallery-container' className='container-fluid gallery-container'>
                <div className='row'>
                    <div className='imageDownloadBox'>
                        <div className='gallery-card'>
                            <img className='remixImage' src= {this.state.gallery.filepath} alt={this.props.alt}/>
                        </div>
                        <br/>
                        <br/>
                        <div className='downloadButton'>
                            <a href={this.state.gallery.filepath} download>
                            <button className="submitbuttons" >Download This Photo</button>
                            </a>
                        </div>
                        <br/>
                        <br/>
                        <div className='uploadButton'>
                            <input 
                            style={{display: 'none'}} 
                            type='file' 
                            onChange={this.fileSelectedHandler.bind(this)}/>
                            Insert Remix Image URL: <input onChange={this.fileSelectedHandler.bind(this)} name="remixImageUpload" type="text" required size="50" />
                            <button className="submitbuttons" onClick={this.fileUploadHandler}>Upload Remix URL</button>
                        </div>
                    </div>
                </div>
            </div>
        
            {/* This is where all the remixes submitted for an 
                Indiviual Gallery Image will appear: */}
            <h1>Checkout this Image's Remix History</h1>
            <div refs='remix-gallery-container' className='container-fluid gallery-container'>
                <div className='row'>
                    {
                        // Hardcode for testing purposes: 
                        // imgUrls.map((url, index) => {
                        this.state.gallery.Remixes.map((remix, index) => {
                            return <div key={index} className='col-sm-6 col-md-3 col-xl-2'>
                                <div className = 'gallery-card'>
                                    <ImageRemixHistoryImages className='gallery-thumbnail' src={remix.filepath} alt={'Image number ' + (index + 1)} />
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
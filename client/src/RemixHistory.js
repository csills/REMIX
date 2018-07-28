import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//This is where a User can see all images they have Remixed
class RemixHistory extends Component {
    render() {
        return  (
        <div>
            <h1>Checkout this Images Remix History</h1>
            {<Link to="/Gallery">take me back to the main gallery plz</Link> }
        </div>
        )
    }
}

export default RemixHistory;
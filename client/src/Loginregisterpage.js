import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loginregister from './components/Loginregister';
import Loginemail from './components/Loginemail';

class Loginregisterpage extends Component {
    render() {
        return  (
        <div>
            <Loginemail></Loginemail>
        </div>
        )
    }
}

export default Loginregisterpage;
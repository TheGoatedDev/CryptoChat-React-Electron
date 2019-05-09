import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Profile.css';


import GlobalContext from '../../context/GlobalContext';
;

class Profile extends Component {

    static contextType = GlobalContext;

    constructor(props) {
        super(props);

        

        this.state = {
            
        };
        
        

    }

    

    render() {
        return (
            
            <div>
                <h2>Profile</h2>
                <Link to='/'>X</Link>
            </div>
            
        );
    }
}

export default Profile;
